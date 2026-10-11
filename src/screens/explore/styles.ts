import { COLORS } from "@/styles/Colors";
import { globalStyles } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  scrollContainer: { flex: 1 },
  scrollContentContainer: {
    ...globalStyles.screenContent,
  },
  header: {
    gap: 16,
    marginBottom: 16,
  },
  row: {
    gap: 10,
    marginBottom: 10,
  },
});

export default styles;
