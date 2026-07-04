import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { getLocalizedNumber } from "@/utils/formatNumber";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    backgroundColor: COLORS.surfaces.muted,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderRadius: 12,
  },
  label: {
    fontSize: FONTS.fontSize.xs,
    color: COLORS.text["muted-foreground"],
  },
  value: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize.lg,
    fontWeight: FONTS.fontWeight.semibold,
    color: COLORS.base.foreground,
  },
});

export type StatisticCardData = {
  value: number;
  label: string;
};

type Props = {
  cards: StatisticCardData[];
};

export default function Statistics({ cards }: Props) {
  return (
    <View style={styles.container}>
      {cards.map((data, index) => (
        <View key={`card-${index}`} style={styles.card}>
          <Text style={styles.value}>{getLocalizedNumber(data.value)}</Text>
          <Text style={styles.label}>{data.label}</Text>
        </View>
      ))}
    </View>
  );
}
