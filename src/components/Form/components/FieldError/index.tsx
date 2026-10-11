import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: COLORS.semantic.destructive,
    fontSize: FONTS.fontSize.sm,
  },
});

type Props = {
  message?: string;
};

export default function FieldError({ message }: Props) {
  if (!message) return null;
  return <Text style={styles.text}>{message}</Text>;
}
