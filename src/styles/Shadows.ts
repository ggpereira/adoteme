import { ViewStyle } from "react-native";
import { COLORS } from "./Colors";

export const SHADOWS = {
  card: {
    elevation: 1,
    shadowColor: COLORS.base.foreground,
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  none: {
    elevation: 0,
    shadowOpacity: 0,
  },
} satisfies Record<string, ViewStyle>;
