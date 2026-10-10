import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 45,
    fontFamily: FONTS.fontFamily.dmSans,
    color: COLORS.base.foreground,
    backgroundColor: COLORS.surfaces.card,
  },
  cursorColor: {
    color: COLORS.text["muted-foreground"],
  },
  placeholderColor: {
    color: COLORS.text["muted-foreground"],
  },
  container: {
    gap: 6,
  },
  label: {
    color: COLORS.base.foreground,
    fontWeight: FONTS.fontWeight.medium,
  },
});
