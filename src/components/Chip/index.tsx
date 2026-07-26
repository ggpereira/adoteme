import Text from "@/components/Text";
import { FONTS } from "@/styles/Fonts";
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 24,
  },
  text: {
    fontFamily: FONTS.fontFamily.dmSans,
    fontSize: FONTS.fontSize.sm,
  },
});

type Props = {
  style?: ViewStyle | Array<ViewStyle>;
  textStyle?: TextStyle | Array<TextStyle>;
  icon?: React.ReactNode;
  text: string;
  onPress?: () => void;
};

export default function Chip({ style, textStyle, icon, text, onPress }: Props) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
