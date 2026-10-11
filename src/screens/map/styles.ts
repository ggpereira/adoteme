import { COLORS } from "@/styles/Colors";
import { globalStyles } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  header: {
    ...globalStyles.screenHeader,
    ...globalStyles.screenContent,
    paddingBottom: 16,
  },
  map: {
    flex: 1,
  },
});

export default styles;
