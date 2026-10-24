import Icon from "@/components/Icons";
import { COLORS } from "@/styles/Colors";
import { RADIUS } from "@/styles/Radius";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.translucent["favorite-button"],
    padding: 6,
    borderRadius: RADIUS.md,
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
