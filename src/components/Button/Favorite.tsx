import Icon from "@/components/Icons";
import { COLORS } from "@/styles/Colors";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    padding: 6,
    borderRadius: 14,
  },
});

type IconProp = {
  color?: string;
  size?: number;
};

type Props = {
  style?: ViewStyle;
  icon?: IconProp;
  onPress: () => void;
};

export default function Favorite({
  style,
  icon = { color: COLORS.base.foreground, size: 14 },
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Icon name="Heart" {...icon} />
    </TouchableOpacity>
  );
}
