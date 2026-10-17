import generatedClips from "./clips.generated.json";
import { FPS, INTRO, OUTRO, SCENES, SceneConfig } from "./config";

export type TimedScene = SceneConfig & {
  src: string;
  /** Source frames skipped at the start of the clip */
  trimBeforeFrames: number;
  /** Source frames played, starting at trimBeforeFrames */
  sourceFrames: number;
  /** Frames the scene occupies on the video timeline (after speed-up) */
  durationInFrames: number;
};

const seconds = (value: number) => Math.round(value * FPS);

type GeneratedClip = { src: string; seconds: number };

const clips: Record<string, GeneratedClip> = generatedClips;

function toTimedScene(scene: SceneConfig): TimedScene {
  const clip = clips[scene.clip];
  if (clip === undefined) {
    throw new Error(`Clip "${scene.clip}" not found. Run "npm run clips".`);
  }
  const trimStart = scene.trimStart ?? 0;
  const available = Math.max(clip.seconds - trimStart, 0);
  const used = Math.min(available, scene.maxSourceSeconds ?? available);
  const sourceFrames = seconds(used);

  return {
    ...scene,
    src: clip.src,
    trimBeforeFrames: seconds(trimStart),
    sourceFrames,
    durationInFrames: Math.max(
      1,
      Math.floor(sourceFrames / scene.playbackRate),
    ),
  };
}

export const TIMED_SCENES = SCENES.map(toTimedScene);

export const INTRO_FRAMES = seconds(INTRO.durationInSeconds);
export const OUTRO_FRAMES = seconds(OUTRO.durationInSeconds);
export const SCENES_FRAMES = TIMED_SCENES.reduce(
  (total, scene) => total + scene.durationInFrames,
  0,
);
export const TOTAL_FRAMES = INTRO_FRAMES + SCENES_FRAMES + OUTRO_FRAMES;
