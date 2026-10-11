import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";
import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";
// Same design tokens as the app, so the video matches it
import { COLORS } from "../../src/styles/Colors";

export { COLORS };

export const FONTS = {
  title: loadPlayfair("normal", { weights: ["700"], subsets: ["latin"] })
    .fontFamily,
  body: loadDMSans("normal", {
    weights: ["400", "500", "600"],
    subsets: ["latin"],
  }).fontFamily,
};
