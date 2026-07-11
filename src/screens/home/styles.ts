import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  scrollContainer: { flex: 1 },
  scrollContentContainer: {
    paddingTop: 60,
    paddingBottom: 80,
    paddingHorizontal: 16,
    gap: 16,
  },
  welcomeText: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.base.foreground,
  },
  hero: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: Math.min(width * 0.075, FONTS.fontSize.hero),
    color: COLORS.base.foreground,
    fontWeight: FONTS.fontWeight.bold,
  },
});

export default styles;
