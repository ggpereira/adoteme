// Copies the newest Maestro recording (docs/linkedin/<yyyyMMdd-HHmmss>/*.mp4)
// into public/clips/ and writes each clip's duration to src/clips.generated.json,
// so the composition knows how long every scene is before rendering.
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

// Walks the MP4 box tree to read the movie header (mvhd) duration
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

function readDurationInSeconds(file) {
  const buffer = fs.readFileSync(file);
  for (const box of boxes(buffer, 0, buffer.length)) {
    if (box.type !== "moov") continue;
    for (const child of boxes(buffer, box.start, box.end)) {
      if (child.type !== "mvhd") continue;
      const version = buffer[child.start];
      const timescale = buffer.readUInt32BE(
        child.start + (version === 0 ? 12 : 20),
      );
      const duration =
        version === 0
          ? buffer.readUInt32BE(child.start + 16)
          : Number(buffer.readBigUInt64BE(child.start + 24));
      return duration / timescale;
    }
  }
  throw new Error(`Não foi possível ler a duração de ${file}`);
}

const source = findLatestRecording();
fs.rmSync(clipsDir, { recursive: true, force: true });
fs.mkdirSync(clipsDir, { recursive: true });

const manifest = {};
for (const file of fs
  .readdirSync(source)
  .filter((name) => name.endsWith(".mp4"))
  .sort()) {
  fs.copyFileSync(path.join(source, file), path.join(clipsDir, file));
  manifest[path.basename(file, ".mp4")] = Number(
    readDurationInSeconds(path.join(source, file)).toFixed(2),
  );
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Clipes de ${path.basename(source)}:`, manifest);
