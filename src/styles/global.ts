import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";
import { FONTS } from "./Fonts";

// Shared screen spacing, so every tab starts its content at the same place
export const SPACING = {
  screenTop: 20,
  screenHorizontal: 20,
  section: 24,
} as const;

export const globalStyles = StyleSheet.create({
  screenTitle: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize["5xl"],
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.base.foreground,
  },
  screenSubtitle: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
  screenHeader: {
    gap: 4,
  },
  screenContent: {
    paddingTop: SPACING.screenTop,
    paddingHorizontal: SPACING.screenHorizontal,
  },
});
