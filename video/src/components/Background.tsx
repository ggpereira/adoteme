import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

// Soft brand-colored blobs drifting slowly behind the content
export default function Background() {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 600], [0, 60], {
    extrapolateRight: "extend",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.base.background }}>
      <div
        style={{
          position: "absolute",
          width: 760,
          height: 760,
          borderRadius: "50%",
          top: -260 + drift,
          right: -300,
          backgroundColor: COLORS.accent.default,
          opacity: 0.35,
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 640,
          height: 640,
          borderRadius: "50%",
          bottom: -280 - drift,
          left: -260,
          backgroundColor: COLORS.primary.default,
          opacity: 0.22,
          filter: "blur(90px)",
        }}
      />
    </AbsoluteFill>
  );
}
