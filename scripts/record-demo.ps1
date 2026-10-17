# Records the LinkedIn demo video on the Android emulator.
#
#   Automatic (Maestro drives the app, one clip per scene):
#     powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1
#   Dry run, no video (checks the flows still work):
#     powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1 -NoRecord
#   Manual (you navigate, press Enter to stop):
#     powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1 -Manual
#
# Precondition: emulator running with the release build installed
# (npm run android:release). Scene 1 restarts the app, which the dev client
# may turn into the Expo launcher.
# Clips are saved to docs/linkedin/<timestamp>/.

param(
  [switch]$NoRecord,
  [switch]$Manual
)

$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$adb = Join-Path $env:LOCALAPPDATA "Android\Sdk\platform-tools\adb.exe"
if (-not (Test-Path $adb)) { $adb = "adb" }

$maestro = Join-Path $env:USERPROFILE "maestro-cli\maestro\bin\maestro.bat"
if (-not (Test-Path $maestro)) { $maestro = "maestro" }
$env:MAESTRO_CLI_NO_ANALYTICS = "1"
$env:MAESTRO_CLI_ANALYSIS_NOTIFICATION_DISABLED = "true"

# Where Maestro leaves the recording on Android (it is not pulled automatically)
$maestroVideo = "/sdcard/maestro-screenrecording.mp4"
$manualVideo = "/sdcard/adoteme-demo.mp4"

$outputDir = Join-Path $root "docs\linkedin\$(Get-Date -Format 'yyyyMMdd-HHmmss')"

function Invoke-Demo([string]$command, [string[]]$extras = @()) {
  & $adb shell am broadcast -a com.android.systemui.demo -e command $command @extras | Out-Null
}

function Enable-DemoMode {
  Write-Host "Ativando Demo mode (barra de status limpa)..."
  & $adb shell settings put global sysui_demo_allowed 1 | Out-Null
  Invoke-Demo "enter"
  Invoke-Demo "clock" @("-e", "hhmm", "0941")
  Invoke-Demo "battery" @("-e", "level", "100", "-e", "plugged", "false")
  Invoke-Demo "network" @("-e", "wifi", "show", "-e", "level", "4")
  Invoke-Demo "network" @("-e", "mobile", "show", "-e", "datatype", "none", "-e", "level", "4")
  Invoke-Demo "notifications" @("-e", "visible", "false")
}

function Save-DeviceVideo([string]$devicePath, [string]$fileName) {
  New-Item -ItemType Directory -Force $outputDir | Out-Null
  $localPath = Join-Path $outputDir $fileName
  & $adb pull $devicePath $localPath | Out-Null
  if ($LASTEXITCODE -ne 0) { throw "Não foi possível copiar $devicePath do emulador." }
  & $adb shell rm $devicePath | Out-Null
  Write-Host "  salvo: $localPath" -ForegroundColor Green
}

function Invoke-ManualRecording {
  Write-Host "Gravando (máximo 3 min). Siga o roteiro em docs/linkedin/roteiro.md" -ForegroundColor Green
  $recorder = Start-Process -FilePath $adb -NoNewWindow -PassThru -ArgumentList @(
    "shell", "screenrecord", "--bit-rate", "8000000", "--time-limit", "180", $manualVideo
  )
  Read-Host "Pressione Enter para parar a gravação"
  # SIGINT lets screenrecord finish writing the mp4 properly
  & $adb shell pkill -INT screenrecord | Out-Null
  $recorder.WaitForExit(10000) | Out-Null
  Start-Sleep -Seconds 2
  Save-DeviceVideo $manualVideo "adoteme-demo.mp4"
}

function Invoke-MaestroScenes {
  $record = if ($NoRecord) { "false" } else { "true" }
  $scenes = Get-ChildItem (Join-Path $root ".maestro\demo") -Filter "*.yaml" | Sort-Object Name

  foreach ($scene in $scenes) {
    Write-Host "Cena $($scene.BaseName)..." -ForegroundColor Cyan
    & $adb shell rm -f $maestroVideo | Out-Null
    & $maestro test -e "RECORD=$record" $scene.FullName
    if ($LASTEXITCODE -ne 0) { throw "A cena $($scene.Name) falhou. Veja o log acima." }
    if (-not $NoRecord) { Save-DeviceVideo $maestroVideo "$($scene.BaseName).mp4" }
  }
}

$devices = & $adb devices | Select-String "\tdevice$"
if (-not $devices) {
  Write-Host "Nenhum emulador/dispositivo conectado. Abra o emulador e tente de novo." -ForegroundColor Red
  exit 1
}

try {
  if (-not $NoRecord) { Enable-DemoMode }
  if ($Manual) { Invoke-ManualRecording } else { Invoke-MaestroScenes }
  if (-not $NoRecord) { Write-Host "Pronto! Clipes em: $outputDir" -ForegroundColor Green }
}
finally {
  if (-not $NoRecord) {
    Invoke-Demo "exit"
    Write-Host "Demo mode desativado."
  }
}
