import Favorite from "@/components/Button/Favorite";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PANEL_OVERLAP } from "../styles";

const HERO_HEIGHT = 288;
const ACTION_SIZE = 40;

const styles = StyleSheet.create({
  container: {
    height: HERO_HEIGHT,
    backgroundColor: COLORS.surfaces.muted,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
  actions: {
    position: "absolute",
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    width: ACTION_SIZE,
    height: ACTION_SIZE,
    padding: 0,
    borderRadius: ACTION_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.overlay.soft,
  },
  name: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: PANEL_OVERLAP + 16,
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize["6xl"],
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.overlay.foreground,
  },
});

type Props = {
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
};

export default function Hero({
  name,
  imageUrl,
  isFavorite,
  onBack,
  onToggleFavorite,
}: Props) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        contentFit="cover"
        accessibilityLabel={name}
      />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[COLORS.overlay.soft, "transparent", COLORS.overlay.strong]}
      />
      <View style={[styles.actions, { top: top + 12 }]}>
        <TouchableOpacity
          style={styles.action}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          onPress={onBack}
        >
          <Icon name="ArrowLeft" size={20} color={COLORS.overlay.foreground} />
        </TouchableOpacity>
        <Favorite
          style={styles.action}
          icon={{ color: COLORS.overlay.foreground, size: 20 }}
          active={isFavorite}
          onPress={onToggleFavorite}
        />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
}
