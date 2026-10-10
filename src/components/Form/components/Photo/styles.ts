import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    color: COLORS.base.foreground,
    fontWeight: FONTS.fontWeight.medium,
  },
  emptyBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    height: 64,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "dashed",
    borderRadius: 12,
    borderColor: COLORS.text["muted-foreground"],
    backgroundColor: COLORS.surfaces.card,
  },
  placeholder: {
    color: COLORS.text["muted-foreground"],
    fontSize: FONTS.fontSize.base,
  },
  previewContainer: {
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
  },
  preview: {
    width: "100%",
    height: "100%",
  },
  removeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.surfaces.card,
  },
});
