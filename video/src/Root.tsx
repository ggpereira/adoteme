import { Composition } from "remotion";
import AdoteMe from "./AdoteMe";
import { FPS, HEIGHT, WIDTH } from "./config";
import { TOTAL_FRAMES } from "./timeline";

export default function RemotionRoot() {
  return (
    <Composition
      id="AdoteMe"
      component={AdoteMe}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
}
