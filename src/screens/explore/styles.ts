import { COLORS } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
    gap: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  scrollContainer: { flex: 1 },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 81,
    paddingHorizontal: 16,
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
