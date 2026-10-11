import { COLORS } from "@/styles/Colors";
import { StyleSheet } from "react-native";
import { fieldStyles } from "../fieldStyles";

export const styles = StyleSheet.create({
  emptyBox: {
    ...fieldStyles.box,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderStyle: "dashed",
    backgroundColor: "transparent",
  },
  previewContainer: {
    height: 180,
    borderRadius: 16,
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
