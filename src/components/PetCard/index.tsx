import { COLORS } from "@/styles/Colors";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: COLORS.surfaces.card,
    elevation: 1,
  },
  imageContainer: {
    flex: 1,
    position: "relative",
  },
  description: {
    padding: 12,
    gap: 4,
  },
});

type Props = {
  cardStyle?: ViewStyle;
  description: (props: any) => React.ReactNode;
  image: React.ReactNode;
};

export default function Card({ cardStyle, description, image }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[styles.container, cardStyle]}>
      <View style={styles.imageContainer}>{image}</View>
      {description?.({ style: styles.description })}
    </TouchableOpacity>
  );
}
