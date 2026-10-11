import { globalStyles } from "@/styles/global";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { getPets, Pet as PetModel } from "@/services/PetService";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Filters from "./components/Filters";
import Pet from "./components/Pet";
import Search from "./components/Search";
import { styles } from "./styles";

const PETS = getPets();

export default function ExploreScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<PetModel>) => (
      <Pet
        name={item.name}
        breed={item.breed}
        distance={item.distance}
        imageUrl={item.imageUrl}
        age={item.age}
        inRescue={item.status === "in-rescue"}
        onPress={() => navigation.navigate("pet-details", { petId: item.id })}
      />
    ),
    [navigation],
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
        <Text style={globalStyles.screenTitle}>Explorar</Text>
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
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContentContainer,
          { paddingBottom: tabBarHeight + 16 },
        ]}
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
