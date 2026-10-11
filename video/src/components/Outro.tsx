import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS } from "../theme";

type Props = {
  title: string;
  author: string;
  stack: string;
  link: string;
};

export default function Outro({ title, author, stack, link }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        backgroundColor: COLORS.primary.default,
        opacity: enter,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.title,
          fontWeight: 700,
          fontSize: 130,
          color: COLORS.primary.foreground,
          transform: `translateY(${(1 - enter) * 30}px)`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 42,
          color: COLORS.primary.foreground,
        }}
      >
        {stack}
      </div>
      <div
        style={{
          marginTop: 40,
          fontFamily: FONTS.body,
          fontSize: 36,
          color: COLORS.primary.foreground,
          opacity: 0.85,
        }}
      >
        {author} · {link}
      </div>
    </AbsoluteFill>
  );
}
