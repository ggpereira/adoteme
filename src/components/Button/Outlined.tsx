import { COLORS } from "@/styles/Colors";
import { StyleSheet } from "react-native";
import { Contained, ContainedProps } from "./Contained";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.base.border,
  },
});

// Same contract as Contained, only the look changes: transparent background,
// thin border and foreground text.
export function Outlined({
  style,
  textColor = COLORS.base.foreground,
  backgroundColor = "transparent",
  ...rest
}: ContainedProps) {
  return (
    <Contained
      {...rest}
      style={{ ...styles.container, ...style }}
      textColor={textColor}
      backgroundColor={backgroundColor}
    />
  );
}
