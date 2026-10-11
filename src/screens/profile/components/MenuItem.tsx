import Icon, { IconNames } from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.base.border,
    backgroundColor: COLORS.surfaces.card,
  },
  label: {
    flex: 1,
    fontSize: FONTS.fontSize.base,
    color: COLORS.base.foreground,
  },
});

type Props = {
  label: string;
  icon: IconNames;
  onPress?: () => void;
};

export default function MenuItem({ label, icon, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      accessibilityRole="button"
      onPress={onPress}
    >
      <Icon name={icon} size={18} color={COLORS.text["muted-foreground"]} />
      <Text style={styles.label}>{label}</Text>
      <Icon
        name="ChevronRight"
        size={16}
        color={COLORS.text["muted-foreground"]}
      />
    </TouchableOpacity>
  );
}
