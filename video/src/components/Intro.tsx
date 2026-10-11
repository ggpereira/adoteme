import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS } from "../theme";

type Props = {
  title: string;
  subtitle: string;
};

export default function Intro({ title, subtitle }: Props) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 14 } });
  const subtitleIn = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200 },
  });
  const exit = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", opacity: exit }}
    >
      <div style={{ fontSize: 120, transform: `scale(${titleIn})` }}>🐾</div>
      <div
        style={{
          fontFamily: FONTS.title,
          fontWeight: 700,
          fontSize: 150,
          color: COLORS.base.foreground,
          transform: `scale(${titleIn})`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 44,
          color: COLORS.text["muted-foreground"],
          opacity: subtitleIn,
          transform: `translateY(${(1 - subtitleIn) * 20}px)`,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
}
