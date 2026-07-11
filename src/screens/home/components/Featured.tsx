import Icon from "@/components/Icons";
import PetCard from "@/components/PetCard";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

const styles = StyleSheet.create({
  footerText: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: FONTS.fontSize.xs,
    color: COLORS.text["muted-foreground"],
  },
  footerContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontSize: FONTS.fontSize.sm,
    color: COLORS.text["muted-foreground"],
  },
  image: {
    width: "100%",
    height: "100%",
  },
  petNameContainer: {
    flexDirection: "column-reverse",
    padding: 8,
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  petName: {
    color: COLORS.surfaces.card,
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize.base,
    fontWeight: FONTS.fontWeight.medium,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: FONTS.fontWeight.medium,
    fontSize: FONTS.fontSize.base,
    color: COLORS.base.foreground,
  },
  buttonLabel: {
    fontSize: FONTS.fontSize.sm,
    color: COLORS.primary.default,
  },
  scrollContainer: {
    marginHorizontal: -16,
  },
  scrollContent: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 12,
  },
});

type FeaturedCardProps = {
  imageUrl: string;
  name: string;
  breed: string;
  distance: string;
  width: number;
};

function FeaturedCard({
  width,
  imageUrl,
  name,
  breed,
  distance,
}: FeaturedCardProps) {
  const imageContainer = useMemo(
    () => (
      <>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          resizeMethod="scale"
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0, 0, 0 , 0.8)"]}
          style={styles.petNameContainer}
        >
          <Text style={styles.petName}>{name}</Text>
        </LinearGradient>
      </>
    ),
    [],
  );

  const Description = useMemo(
    () => (props: any) => (
      <View style={props.style}>
        <Text style={styles.text}>{breed}</Text>
        <View style={styles.footerContainer}>
          <Icon name="MapPin" size={9} color={styles.footerText.color} />
          <Text style={styles.footerText}>{distance}</Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <PetCard
      cardWidth={width}
      image={imageContainer}
      description={(props) => <Description {...props} />}
    />
  );
}

type Props = {
  featuredPets: Array<Omit<FeaturedCardProps, "width">>;
};

export default function Featured({ featuredPets = [] }: Props) {
  const { width } = useWindowDimensions();
  const computedWidth = width * 0.5;
  const isEmpty = featuredPets.length <= 0;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Em destaque</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLabel}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {featuredPets.map((card, index) => (
          <FeaturedCard
            key={`featured-card-${index}`}
            width={computedWidth}
            {...card}
          />
        ))}
      </ScrollView>
    </View>
  );
}
