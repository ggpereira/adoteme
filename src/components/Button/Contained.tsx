import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: COLORS.primary.default,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.primary.foreground,
    fontSize: FONTS.fontSize.sm,
    fontWeight: FONTS.fontWeight.bold,
  },
  contentBasedOnText: {
    flexDirection: "row",
  },
});

export type ContainedProps = {
  leftElement?: ({
    color,
    size,
  }: {
    color: string;
    size: number;
  }) => React.ReactNode | undefined;
  rightElement?: ({
    color,
    size,
  }: {
    color: string;
    size: number;
  }) => React.ReactNode | undefined;
  style?: ViewStyle;
  growToParentWidth?: boolean;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
};

export function Contained({
  style,
  growToParentWidth = false,
  text,
  textColor,
  backgroundColor,
  onPress,
  rightElement,
  leftElement,
}: ContainedProps) {
  const Button = (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        backgroundColor ? { backgroundColor } : null,
      ]}
      onPress={onPress}
    >
      {leftElement?.({ color: textColor ?? styles.text.color, size: 12 })}
      <Text style={[styles.text, textColor ? { color: textColor } : null]}>
        {text}
      </Text>
      {rightElement?.({ color: textColor ?? styles.text.color, size: 12 })}
    </TouchableOpacity>
  );

  if (growToParentWidth) {
    return Button;
  }

  return <View style={styles.contentBasedOnText}>{Button}</View>;
}
