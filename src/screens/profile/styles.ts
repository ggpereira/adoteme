import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { SPACING } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  // Horizontal padding lives in `section` so the favorites list can bleed
  scrollContent: {
    paddingTop: SPACING.screenTop,
    gap: SPACING.section,
  },
  section: {
    paddingHorizontal: SPACING.screenHorizontal,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: FONTS.fontSize.md,
    fontWeight: FONTS.fontWeight.semibold,
    color: COLORS.base.foreground,
  },
  menu: {
    gap: 8,
  },
});

export default styles;
