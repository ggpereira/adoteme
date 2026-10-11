import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.surfaces.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  initials: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.text["muted-foreground"],
  },
});

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

type Props = {
  name: string;
  imageUrl?: string;
  size?: number;
};

export default function Avatar({ name, imageUrl, size = 80 }: Props) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          contentFit="cover"
          accessibilityLabel={name}
        />
      ) : (
        <Text style={[styles.initials, { fontSize: size * 0.35 }]}>
          {getInitials(name)}
        </Text>
      )}
    </View>
  );
}
