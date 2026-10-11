import { StyleSheet } from "react-native";
import { fieldStyles } from "../fieldStyles";

export const styles = StyleSheet.create({
  inputContainer: {
    ...fieldStyles.box,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  value: {
    flexShrink: 1,
  },
});
