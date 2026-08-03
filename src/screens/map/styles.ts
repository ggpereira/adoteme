import { COLORS } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
    paddingVertical: 20,
    paddingBottom: 30,
  },
  header: {
    flex: 1,
  },
});

export default styles;
