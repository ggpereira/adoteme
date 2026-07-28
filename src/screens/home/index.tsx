import Text from "@/components/Text";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import PetRescueProjects from "./components/PetRescueProjects";
import Statistics from "./components/Statistics";
import { styles } from "./styles";

const STATISTICS = [
  {
    label: "Resgatados",
    value: 4832,
  },
  {
    label: "Adotados",
    value: 3219,
  },
  {
    label: "Voluntários",
    value: 612,
  },
];

const CARDS = [
  {
    name: "Mel",
    breed: "SRD (vira-lata)",
    distance: "1.2 km",
    imageUrl: "https://images.unsplash.com/photo-1594004844563-536a03a6e532",
  },
  {
    name: "Luna",
    breed: "Persa misto",
    distance: "1.6 km",
    imageUrl: "https://images.unsplash.com/photo-1582725461742-8ecd962c260d",
  },
  {
    name: "Nala",
    breed: "Mestiça",
    distance: "0.8 km",
    imageUrl: "https://images.unsplash.com/photo-1615111784767-4d7c527f32a1",
  },
  {
    name: "Spencer",
    breed: "Poodle",
    distance: "0.2 km",
    imageUrl: "https://images.unsplash.com/photo-1675701917667-d654fa82e536",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <Text style={styles.welcomeText}>Olá, Gabriel 👋</Text>
        <Text style={styles.hero}>Encontre o seu novo melhor amigo</Text>
        <Banner />
        <Statistics cards={STATISTICS} />
        <Featured featuredPets={CARDS} />
        <PetRescueProjects />
      </ScrollView>
    </SafeAreaView>
  );
}
