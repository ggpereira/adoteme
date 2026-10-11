import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "../theme";

const FADE_OUT_FRAMES = 8;

type Props = {
  step: string;
  text: string;
};

// Animated caption shown above the phone while its scene plays
export default function Caption({ step, text }: Props) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const exit = interpolate(
    frame,
    [durationInFrames - FADE_OUT_FRAMES, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        opacity: enter * exit,
        transform: `translateY(${(1 - enter) * 24}px)`,
        textAlign: "center",
        padding: "0 80px",
      }}
    >
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 600,
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: COLORS.primary.default,
          marginBottom: 12,
        }}
      >
        {step}
      </div>
      <div
        style={{
          fontFamily: FONTS.title,
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1.15,
          color: COLORS.base.foreground,
        }}
      >
        {text}
      </div>
    </div>
  );
}
