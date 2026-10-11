import Favorite from "@/components/Button/Favorite";
import Chip from "@/components/Chip";
import Icon from "@/components/Icons";
import PetCard from "@/components/PetCard";
import Text from "@/components/Text";
import TextMarquee from "@/components/TextMarquee";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { SPACING } from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo, useState } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 150,
  },
  imageOverlay: {
    position: "absolute",
    padding: 8,
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
  favorite: {
    position: "absolute",
    right: 2,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 4,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  title: {
    fontSize: FONTS.fontSize.base,
    flexShrink: 1,
    fontWeight: FONTS.fontWeight.bold,
  },
  age: {
    fontSize: FONTS.fontSize.xs,
  },
  breed: {
    fontSize: FONTS.fontSize.sm,
  },
  footer: {
    fontSize: FONTS.fontSize.xs,
    color: COLORS.primary.default,
  },
  rescue: {
    position: "absolute",
    left: 2,
    top: 2,
    backgroundColor: "rgba(255, 127, 0, 0.7)",
  },
  rescueLabel: {
    color: COLORS.primary.foreground,
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSize.sm,
  },
});

const InRescueChip = () => (
  <Chip
    style={styles.rescue}
    textStyle={styles.rescueLabel}
    text="Em resgate"
  />
);

type Props = {
  name: string;
  breed: string;
  distance: string;
  imageUrl: string;
  age: string;
  inRescue: boolean;
  onPress: () => void;
};

const PADDINGS_SUM = SPACING.screenHorizontal * 2;
const GAP = 10;

export default function Pet({
  inRescue,
  name,
  breed,
  distance,
  age,
  imageUrl,
  onPress,
}: Props) {
  const { width } = useWindowDimensions();
  // TODO: persist favorites once the user API exists
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const cardWidth = (width - PADDINGS_SUM - GAP) * 0.5;
  const cardHeight = cardWidth * 1.4;

  const ImageRender = useMemo(
    () => (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          resizeMethod="scale"
          resizeMode="cover"
        />
        <LinearGradient
          style={styles.imageOverlay}
          colors={["transparent", "transparent", "rgba(0, 0, 0, 0.4)"]}
        >
          <View style={styles.header}>
            {inRescue ? <InRescueChip /> : null}
            <Favorite
              style={styles.favorite}
              active={isFavorite}
              onPress={() => setIsFavorite((favorite) => !favorite)}
            />
          </View>
        </LinearGradient>
      </View>
    ),
    [imageUrl, inRescue, isFavorite],
  );

  const Description = useCallback(
    (props: any) => (
      <View {...props}>
        <View style={styles.titleContainer}>
          <TextMarquee textStyle={styles.title} text={name} />
          <Text style={styles.age}>{age}</Text>
        </View>
        <Text style={styles.breed}>{breed}</Text>
        <View style={styles.footerContainer}>
          <Icon name="MapPin" color={styles.footer.color} size={10} />
          <Text style={styles.footer}>{distance}</Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <PetCard
      cardStyle={{
        width: cardWidth,
        height: cardHeight,
      }}
      image={ImageRender}
      description={Description}
      onPress={onPress}
    />
  );
}
