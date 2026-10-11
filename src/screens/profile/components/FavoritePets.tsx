import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { SPACING } from "@/styles/global";
import { Image } from "expo-image";
import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { FavoritePet } from "../data";

const ITEM_SIZE = 80;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: SPACING.screenHorizontal,
    gap: 12,
  },
  item: {
    width: ITEM_SIZE,
    alignItems: "center",
    gap: 4,
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 16,
    backgroundColor: COLORS.surfaces.muted,
  },
  name: {
    fontSize: FONTS.fontSize.sm,
    color: COLORS.base.foreground,
  },
  empty: {
    paddingHorizontal: SPACING.screenHorizontal,
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
});

type Props = {
  pets: FavoritePet[];
};

export default function FavoritePets({ pets }: Props) {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<FavoritePet>) => (
      <View style={styles.item}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          contentFit="cover"
          accessibilityLabel={item.name}
        />
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    ),
    [],
  );

  return (
    <FlatList
      horizontal
      data={pets}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <Text style={styles.empty}>Você ainda não favoritou nenhum pet.</Text>
      }
    />
  );
}
