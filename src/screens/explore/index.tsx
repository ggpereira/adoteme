import { useCallback, useMemo } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Filters from "./components/Filters";
import Pet from "./components/Pet";
import Search from "./components/Search";
import { styles } from "./styles";

const PETS: Array<any> = [
  {
    id: "59bf79e0-71c0-469b-b93e-eae022103b4b",
    recentlyRescued: false,
    availableForAdoption: true,
    name: "Mel",
    breed: "SRD (vira-lata)",
    distance: "1.2 km",
    imageUrl: "https://images.unsplash.com/photo-1594004844563-536a03a6e532",
    age: "2 anos",
    favorite: false,
  },
  {
    id: "57740506-8138-4971-bf8e-67bd055c9385",
    recentlyRescued: true,
    availableForAdoption: true,
    name: "Luna",
    breed: "Persa misto",
    distance: "1.6 km",
    imageUrl: "https://images.unsplash.com/photo-1582725461742-8ecd962c260d",
    age: "8 meses",
    favorite: false,
  },
  {
    id: "f9eb7175-fa69-4c26-b315-34f3e7313ba5",
    recentlyRescued: false,
    name: "Nala",
    breed: "Mestiça",
    distance: "0.8 km",
    imageUrl: "https://images.unsplash.com/photo-1615111784767-4d7c527f32a1",
    age: "1 ano",
    favorite: false,
  },
  {
    id: "b67f1e87-a44d-4f2d-960e-9ea72b87718d",
    recentlyRescued: true,
    name: "Margot",
    breed: "Poodle",
    distance: "0.2 km",
    imageUrl: "https://images.unsplash.com/photo-1675701917667-d654fa82e536",
    age: "4 meses",
    favorite: false,
  },
];

export default function ExploreScreen() {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<any>) => <Pet key={item.id} {...item} />,
    [],
  );

  const EmptyList = useMemo(
    () => (
      <View>
        <Text>Ainda não há pets cadastrados...</Text>
      </View>
    ),
    [],
  );

  const Header = useMemo(
    () => (
      <View style={styles.header}>
        <Text style={styles.title}>Explorar</Text>
        <Search
          onSearch={(text) => {
            console.log(`search for ${text} `);
          }}
        />
        <Filters
          onChangeFilter={(value) => {
            console.log(`filter by ${value}`);
          }}
        />
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        columnWrapperStyle={styles.row}
        data={PETS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={Header}
        ListEmptyComponent={EmptyList}
      />
    </SafeAreaView>
  );
}
