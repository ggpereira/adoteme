import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { TimedScene } from "../timeline";

type Props = Pick<
  TimedScene,
  "src" | "trimBeforeFrames" | "sourceFrames" | "playbackRate"
>;

export default function SceneClip({
  src,
  trimBeforeFrames,
  sourceFrames,
  playbackRate,
}: Props) {
  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={staticFile(src)}
        trimBefore={trimBeforeFrames}
        durationInFrames={sourceFrames}
        playbackRate={playbackRate}
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
}
