import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const FIELD_HEIGHT = 46;

// Shared look of every form field (label + bordered box), so all field types
// stay visually consistent and change in a single place.
export const fieldStyles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    color: COLORS.base.foreground,
    fontSize: FONTS.fontSize.base,
    fontWeight: FONTS.fontWeight.medium,
  },
  box: {
    height: FIELD_HEIGHT,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.base.border,
    backgroundColor: COLORS.surfaces.card,
  },
  boxError: {
    borderColor: COLORS.semantic.destructive,
  },
  text: {
    color: COLORS.base.foreground,
    fontSize: FONTS.fontSize.base,
  },
  placeholder: {
    color: COLORS.text["muted-foreground"],
    fontSize: FONTS.fontSize.base,
  },
});
