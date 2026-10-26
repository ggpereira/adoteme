import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";
import { FONTS } from "./Fonts";

// Spacing scale for padding, margin and gap. The screen* keys keep every tab
// starting its content at the same place.
export const SPACING = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
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
    gap: SPACING.xs,
  },
  screenContent: {
    paddingTop: SPACING.screenTop,
    paddingHorizontal: SPACING.screenHorizontal,
  },
});
