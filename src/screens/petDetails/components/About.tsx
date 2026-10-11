import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.surfaces.secondary,
  },
  title: {
    fontSize: FONTS.fontSize.base,
    fontWeight: FONTS.fontWeight.semibold,
    color: COLORS.base.foreground,
  },
  description: {
    fontSize: FONTS.fontSize.base,
    lineHeight: 22,
    color: COLORS.text["muted-foreground"],
  },
});

type Props = {
  name: string;
  description: string;
};

export default function About({ name, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre {name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
