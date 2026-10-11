import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet, View } from "react-native";
import { ProfileStat } from "../data";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
  },
  stat: {
    alignItems: "center",
  },
  value: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize.md,
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.base.foreground,
  },
  label: {
    fontSize: FONTS.fontSize.sm,
    color: COLORS.text["muted-foreground"],
  },
});

type Props = {
  stats: ProfileStat[];
};

export default function ProfileStats({ stats }: Props) {
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View key={stat.label} style={styles.stat}>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
