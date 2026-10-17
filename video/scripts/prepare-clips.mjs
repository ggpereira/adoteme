// Converts the newest Maestro recording (docs/linkedin/<yyyyMMdd-HHmmss>/*.mp4)
// into constant frame rate clips in public/clips/ and writes each clip's
// duration to src/clips.generated.json, so the composition knows how long
// every scene is before rendering.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const videoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const recordingsDir = path.resolve(videoRoot, "../docs/linkedin");
const clipsDir = path.join(videoRoot, "public/clips");
const manifestPath = path.join(videoRoot, "src/clips.generated.json");

function findLatestRecording() {
  const folders = fs
    .readdirSync(recordingsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{8}-\d{6}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
  if (folders.length === 0) {
    throw new Error(
      "Nenhuma gravação encontrada em docs/linkedin/. Rode scripts/record-demo.ps1 primeiro.",
    );
  }
  return path.join(recordingsDir, folders[folders.length - 1]);
}

// Walks the MP4 box tree (moov → trak → mdia → …)
function* boxes(buffer, start, end) {
  let offset = start;
  while (offset + 8 <= end) {
    let size = buffer.readUInt32BE(offset);
    const type = buffer.toString("latin1", offset + 4, offset + 8);
    let header = 8;
    if (size === 1) {
      size = Number(buffer.readBigUInt64BE(offset + 8));
      header = 16;
    }
    if (size === 0) size = end - offset;
    yield { type, start: offset + header, end: offset + size };
    offset += size;
  }
}

function findChild(buffer, parent, type) {
  for (const box of boxes(buffer, parent.start, parent.end)) {
    if (box.type === type) return box;
  }
  return undefined;
}

// Time of the last real video frame. screenrecord only writes frames when the
// screen changes, so the container duration (mvhd) can be longer than the
// footage: a static ending has no frames, and Remotion fails to seek there.
function readLastFrameSeconds(file) {
  const buffer = fs.readFileSync(file);
  const moov = findChild(buffer, { start: 0, end: buffer.length }, "moov");
  if (!moov) throw new Error(`Arquivo sem "moov": ${file}`);

  for (const trak of boxes(buffer, moov.start, moov.end)) {
    if (trak.type !== "trak") continue;
    const mdia = findChild(buffer, trak, "mdia");
    const hdlr = mdia && findChild(buffer, mdia, "hdlr");
    if (
      !hdlr ||
      buffer.toString("latin1", hdlr.start + 8, hdlr.start + 12) !== "vide"
    ) {
      continue;
    }

    const mdhd = findChild(buffer, mdia, "mdhd");
    const timescale = buffer.readUInt32BE(
      mdhd.start + (buffer[mdhd.start] === 0 ? 12 : 20),
    );
    const stbl = findChild(buffer, findChild(buffer, mdia, "minf"), "stbl");
    const stts = findChild(buffer, stbl, "stts");

    // stts: [count, delta] runs; a frame starts where the previous ones end
    const entries = buffer.readUInt32BE(stts.start + 4);
    let total = 0;
    let lastDelta = 0;
    for (let i = 0; i < entries; i++) {
      const offset = stts.start + 8 + i * 8;
      const count = buffer.readUInt32BE(offset);
      lastDelta = buffer.readUInt32BE(offset + 4);
      total += count * lastDelta;
    }
    return (total - lastDelta) / timescale;
  }
  throw new Error(`Nenhuma faixa de vídeo em ${file}`);
}

// screenrecord produces variable frame rate video with gaps while the screen is
// still, and Remotion can't seek inside those gaps. Re-encoding to a constant
// frame rate (same FPS as src/config.ts) repeats the last frame to fill them.
// Uses the ffmpeg bundled with Remotion, so nothing else needs to be installed.
const FPS = 30;

// Run the Remotion CLI through Node directly: going through npx.cmd on Windows
// would let cmd.exe mangle arguments such as "fps=30"
const remotionCli = path.join(
  videoRoot,
  "node_modules/@remotion/cli/remotion-cli.js",
);

function toConstantFrameRate(input, output) {
  const result = spawnSync(
    process.execPath,
    [
      remotionCli,
      "ffmpeg",
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      input,
      // Remotion's slim ffmpeg has no "fps" filter: use the output rate instead
      "-r",
      String(FPS),
      "-fps_mode",
      "cfr",
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "18",
      "-pix_fmt",
      "yuv420p",
      "-an",
      output,
    ],
    { cwd: videoRoot, stdio: "inherit" },
  );
  if (result.status !== 0) {
    throw new Error(`Falha ao converter ${path.basename(input)} com o ffmpeg.`);
  }
}

const source = findLatestRecording();
const recording = path.basename(source);
// One folder per recording gives every clip a new URL. Remotion caches video
// frames by URL, so reusing "clips/01-home.mp4" for a new recording would make
// it seek into the stale frame index of the previous file.
fs.rmSync(clipsDir, { recursive: true, force: true });
fs.mkdirSync(path.join(clipsDir, recording), { recursive: true });

// screenrecord only writes frames when the screen changes: a scene without any
// movement yields a (near) zero-length clip that would break the render
const MIN_CLIP_SECONDS = 0.5;

const manifest = {};
for (const file of fs
  .readdirSync(source)
  .filter((name) => name.endsWith(".mp4"))
  .sort()) {
  const output = path.join(clipsDir, recording, file);
  toConstantFrameRate(path.join(source, file), output);
  manifest[path.basename(file, ".mp4")] = {
    src: `clips/${recording}/${file}`,
    seconds: Number(readLastFrameSeconds(output).toFixed(2)),
  };
}

const emptyClips = Object.entries(manifest)
  .filter(([, clip]) => clip.seconds < MIN_CLIP_SECONDS)
  .map(([clip]) => clip);
if (emptyClips.length > 0) {
  throw new Error(
    `Clipes vazios ou curtos demais: ${emptyClips.join(", ")}. ` +
      "A cena precisa ter movimento na tela enquanto grava; ajuste o fluxo em .maestro/demo/ e grave de novo.",
  );
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Clipes de ${recording}:`, manifest);
