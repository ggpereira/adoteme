import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
    paddingVertical: 20,
    paddingBottom: 30,
    gap: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subtitle: {
    fontSize: FONTS.fontSize.sm,
    color: COLORS.text["muted-foreground"],
  },
});

export default styles;
