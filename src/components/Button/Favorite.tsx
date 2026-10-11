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
  active?: boolean;
  onPress: () => void;
};

export default function Favorite({
  style,
  icon = { color: COLORS.base.foreground, size: 14 },
  active = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      accessibilityRole="button"
      accessibilityLabel={active ? "Remover dos favoritos" : "Favoritar"}
      accessibilityState={{ selected: active }}
      onPress={onPress}
    >
      <Icon
        name="Heart"
        {...icon}
        color={active ? COLORS.urgency.high : icon.color}
        fill={active ? COLORS.urgency.high : "transparent"}
      />
    </TouchableOpacity>
  );
}
