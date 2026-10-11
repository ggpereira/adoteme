import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { globalStyles, SPACING } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  scrollContent: {
    ...globalStyles.screenContent,
    gap: SPACING.section,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  success: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  successIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: COLORS.feedback["success-soft"],
  },
  successTitle: {
    marginBottom: 8,
    textAlign: "center",
  },
  successText: {
    fontSize: FONTS.fontSize.base,
    lineHeight: 22,
    textAlign: "center",
    color: COLORS.text["muted-foreground"],
    marginBottom: 32,
  },
  successButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  successButtonText: {
    fontSize: FONTS.fontSize.md,
    fontWeight: FONTS.fontWeight.medium,
  },
});

export default styles;
