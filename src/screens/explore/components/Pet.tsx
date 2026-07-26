import Favorite from "@/components/Button/Favorite";
import Chip from "@/components/Chip";
import Icon from "@/components/Icons";
import PetCard from "@/components/PetCard";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo } from "react";
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
  id: string;
  recentlyRescued: false;
  name: string;
  breed: string;
  distance: string;
  imageUrl: string;
  age: string;
};

const PADDINGS_SUM = 56;
const GAP = 10;

export default function Pet({
  recentlyRescued,
  name,
  breed,
  distance,
  age,
  imageUrl,
}: Props) {
  const { width } = useWindowDimensions();

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
            {recentlyRescued ? <InRescueChip /> : null}
            <Favorite
              style={styles.favorite}
              onPress={() => {
                console.log("debug on press");
              }}
            />
          </View>
        </LinearGradient>
      </View>
    ),
    [],
  );

  const Description = useCallback(
    (props: any) => (
      <View {...props}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
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
    />
  );
}
