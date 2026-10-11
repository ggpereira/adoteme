import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

// How much the content panel slides up over the hero image
export const PANEL_OVERLAP = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surfaces.card,
  },
  panel: {
    marginTop: -PANEL_OVERLAP,
    padding: 20,
    gap: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: COLORS.surfaces.card,
  },
  adoptButton: {
    paddingVertical: 16,
    borderRadius: 16,
  },
  adoptButtonText: {
    fontSize: FONTS.fontSize.md,
    fontWeight: FONTS.fontWeight.medium,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 32,
    backgroundColor: COLORS.base.background,
  },
  notFoundText: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
});

export default styles;
