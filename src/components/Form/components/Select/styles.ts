import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: StyleSheet.hairlineWidth,
    height: 45,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: COLORS.surfaces.card,
    color: COLORS.base.foreground,
    borderColor: COLORS.text["muted-foreground"],
  },
  placeHolderStyle: {
    color: COLORS.text["muted-foreground"],
  },
  labelStyle: {
    color: COLORS.base.foreground,
    fontWeight: FONTS.fontWeight.medium,
  },
});
