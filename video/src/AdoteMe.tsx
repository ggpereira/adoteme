import { AbsoluteFill, Series } from "remotion";
import Background from "./components/Background";
import Intro from "./components/Intro";
import Outro from "./components/Outro";
import Showcase from "./components/Showcase";
import { INTRO, OUTRO } from "./config";
import {
  INTRO_FRAMES,
  OUTRO_FRAMES,
  SCENES_FRAMES,
  TIMED_SCENES,
} from "./timeline";

// Intro → app walkthrough inside a phone → outro
export default function AdoteMe() {
  return (
    <AbsoluteFill>
      <Background />
      <Series>
        <Series.Sequence durationInFrames={INTRO_FRAMES}>
          <Intro title={INTRO.title} subtitle={INTRO.subtitle} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENES_FRAMES}>
          <Showcase scenes={TIMED_SCENES} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={OUTRO_FRAMES}>
          <Outro
            title={OUTRO.title}
            author={OUTRO.author}
            stack={OUTRO.stack}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
}
