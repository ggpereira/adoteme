import Chip from "@/components/Chip";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { Pet } from "@/services/PetService";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { StyleSheet, View } from "react-native";
import StatusBadge from "./StatusBadge";

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  traits: {
    flexShrink: 1,
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  vaccinated: {
    backgroundColor: COLORS.feedback["success-soft"],
  },
  vaccinatedText: {
    color: COLORS.feedback["success-strong"],
  },
  castrated: {
    backgroundColor: COLORS.feedback["info-soft"],
  },
  castratedText: {
    color: COLORS.feedback["info-strong"],
  },
  age: {
    backgroundColor: COLORS.surfaces.secondary,
  },
  ageText: {
    color: COLORS.text["muted-foreground"],
  },
});

type Props = {
  pet: Pick<
    Pet,
    | "breed"
    | "gender"
    | "size"
    | "status"
    | "city"
    | "state"
    | "distance"
    | "vaccinated"
    | "castrated"
    | "age"
  >;
};

export default function PetSummary({ pet }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.traits}>
          {pet.breed} · {pet.gender} · {pet.size}
        </Text>
        <StatusBadge status={pet.status} />
      </View>

      <View style={styles.location}>
        <Icon name="MapPin" size={13} color={COLORS.primary.default} />
        <Text style={styles.locationText}>
          {pet.city}, {pet.state} · {pet.distance} de você
        </Text>
      </View>

      <View style={styles.chips}>
        {pet.vaccinated ? (
          <Chip
            text="Vacinado"
            style={styles.vaccinated}
            textStyle={styles.vaccinatedText}
            icon={
              <Icon
                name="CircleCheck"
                size={11}
                color={styles.vaccinatedText.color}
              />
            }
          />
        ) : null}
        {pet.castrated ? (
          <Chip
            text="Castrado"
            style={styles.castrated}
            textStyle={styles.castratedText}
            icon={
              <Icon
                name="CircleCheck"
                size={11}
                color={styles.castratedText.color}
              />
            }
          />
        ) : null}
        <Chip text={pet.age} style={styles.age} textStyle={styles.ageText} />
      </View>
    </View>
  );
}
