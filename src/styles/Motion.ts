import { Easing } from "react-native";

// Durations in ms. Reanimated code uses its own Easing with the same curve
// (Easing.out(Easing.cubic) from react-native-reanimated).
export const MOTION = {
  duration: {
    fast: 200,
    normal: 250,
    slow: 400,
    marquee: 4000,
  },
  delay: {
    marquee: 3000,
  },
  easing: {
    standard: Easing.out(Easing.cubic),
  },
} as const;
