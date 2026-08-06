import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";
import { FONTS } from "./Fonts";

export const globalStyles = StyleSheet.create({
  screenTitle: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize["5xl"],
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.base.foreground,
  },
});
