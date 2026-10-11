import {
  AbsoluteFill,
  Series,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TimedScene } from "../timeline";
import Caption from "./Caption";
import PhoneFrame from "./PhoneFrame";
import SceneClip from "./SceneClip";

const CAPTION_TOP = 70;
const PHONE_TOP = 300;
const SCREEN_HEIGHT = 960;

type Props = {
  scenes: TimedScene[];
};

// The phone stays on screen while the clips inside it and the captions above
// it change scene by scene.
export default function Showcase({ scenes }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const phoneIn = spring({ frame, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ top: CAPTION_TOP }}>
        <Series>
          {scenes.map((scene) => (
            <Series.Sequence
              key={scene.clip}
              durationInFrames={scene.durationInFrames}
            >
              <Caption step={scene.step} text={scene.caption} />
            </Series.Sequence>
          ))}
        </Series>
      </AbsoluteFill>

      <AbsoluteFill style={{ top: PHONE_TOP, alignItems: "center" }}>
        <PhoneFrame
          screenHeight={SCREEN_HEIGHT}
          style={{
            transform: `translateY(${(1 - phoneIn) * 400}px)`,
            opacity: phoneIn,
          }}
        >
          <Series>
            {scenes.map((scene) => (
              <Series.Sequence
                key={scene.clip}
                durationInFrames={scene.durationInFrames}
              >
                <SceneClip
                  src={scene.src}
                  trimBeforeFrames={scene.trimBeforeFrames}
                  sourceFrames={scene.sourceFrames}
                  playbackRate={scene.playbackRate}
                />
              </Series.Sequence>
            ))}
          </Series>
        </PhoneFrame>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
