import { FONTS } from "@/styles/Fonts";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

export default function Text(props: TextProps) {
  const style = {
    fontFamily: FONTS.fontFamily.dmSans,
    ...StyleSheet.flatten(props?.style),
  };
  return <RNText {...props} allowFontScaling={false} style={style} />;
}
