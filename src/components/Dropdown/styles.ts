import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    backgroundColor: COLORS.surfaces.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.text["muted-foreground"],
    padding: 12,
    borderRadius: 12,
    borderStyle: "dashed",
  },
  dropdownListContentContainer: {
    gap: 10,
  },
  dropdownItem: {
    padding: 4,
  },
  dropdownItemLabel: {
    color: COLORS.base.foreground,
    fontWeight: FONTS.fontWeight.medium,
  },
});
