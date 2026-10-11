import { StyleSheet } from "react-native";
import { fieldStyles } from "../fieldStyles";

export const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    gap: 8,
  },
  option: {
    ...fieldStyles.box,
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
