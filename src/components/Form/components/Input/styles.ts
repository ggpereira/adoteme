import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";
import { fieldStyles } from "../fieldStyles";

export const styles = StyleSheet.create({
  inputStyle: {
    ...fieldStyles.box,
    ...fieldStyles.text,
    fontFamily: FONTS.fontFamily.dmSans,
  },
  multiline: {
    height: undefined,
    minHeight: 100,
    paddingVertical: 12,
  },
});
