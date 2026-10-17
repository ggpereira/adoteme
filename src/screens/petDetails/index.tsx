import Button from "@/components/Button";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { RootStackParamList } from "@/routes/types";
import { getPetById } from "@/services/PetService";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import About from "./components/About";
import ContactActions from "./components/ContactActions";
import Hero from "./components/Hero";
import PetSummary from "./components/PetSummary";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "pet-details">;

export default function PetDetailsScreen({ route, navigation }: Props) {
  const { bottom } = useSafeAreaInsets();
  const pet = getPetById(route.params.petId);
  // TODO: persist favorites once the user API exists
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  if (!pet) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Animal não encontrado.</Text>
        <Button text="Voltar" onPress={navigation.goBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom + 16 }}
      >
        <Hero
          name={pet.name}
          imageUrl={pet.imageUrl}
          isFavorite={isFavorite}
          onBack={navigation.goBack}
          onToggleFavorite={() => setIsFavorite((favorite) => !favorite)}
        />
        <View style={styles.panel}>
          <PetSummary pet={pet} />
          <About name={pet.name} description={pet.description} />
          <ContactActions phone={pet.contact.phone} email={pet.contact.email} />
          {pet.status === "available" ? (
            <Button
              text={`Quero adotar ${pet.name}`}
              rightElement={({ color, size }) => (
                <Icon name="PawPrint" color={color} size={size} />
              )}
              growToParentWidth
              style={styles.adoptButton}
              textStyle={styles.adoptButtonText}
              // TODO: open the adoption form once it exists
              onPress={() => {}}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
