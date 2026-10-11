import { CSSProperties, ReactNode } from "react";
import { COLORS } from "../theme";

// Emulator recordings are 1080×2340 (Pixel), keep the same aspect ratio
const SCREEN_ASPECT = 1080 / 2340;
const BEZEL = 14;

type Props = {
  screenHeight: number;
  style?: CSSProperties;
  children: ReactNode;
};

export default function PhoneFrame({ screenHeight, style, children }: Props) {
  const screenWidth = Math.round(screenHeight * SCREEN_ASPECT);

  return (
    <div
      style={{
        padding: BEZEL,
        borderRadius: 64,
        backgroundColor: COLORS.base.foreground,
        boxShadow: "0 40px 80px rgba(45, 31, 15, 0.35)",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: screenWidth,
          height: screenHeight,
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: COLORS.base.background,
        }}
      >
        {children}
      </div>
    </div>
  );
}
