import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
    gap: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  welcomeText: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.base.foreground,
  },
  hero: {
    fontSize: Math.min(width * 0.075, FONTS.fontSize.hero),
    color: COLORS.base.foreground,
  },
});

export default styles;
