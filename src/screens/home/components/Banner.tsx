import Button from "@/components/Button";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    width: "100%",
  },
  textContainer: {
    padding: 16,
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.primary.default,
  },
  imageContainer: {
    position: "relative",
    width: "44%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  text: {
    marginBottom: 12,
    color: COLORS.surfaces.secondary,
    fontSize: FONTS.fontSize.sm,
  },
  h1: {
    color: COLORS.surfaces.card,
    fontSize: FONTS.fontSize.xl,
    fontWeight: FONTS.fontWeight.bold,
  },
  imageFilter: {
    position: "absolute",
    backgroundColor: COLORS.primary.default,
    opacity: 0.5,
    height: "100%",
    width: "100%",
  },
  applyBtnMarginTop: {
    marginTop: 10,
  },
});

export default function Banner() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Você pode ajudar</Text>
        <Text style={styles.h1}>Animal em risco?</Text>
        <Text style={styles.h1}>Reporte agora.</Text>
        <Button
          style={styles.applyBtnMarginTop}
          backgroundColor="rgba(255, 255, 255, 0.20)"
          leftElement={(props) => <Icon name="TriangleAlert" {...props} />}
          text="Chamar resgate"
          onPress={() => {}}
        />
      </View>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.image, { height: width * 0.38 }]}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1553688738-a278b9f063e0",
          }}
        />
        <View style={styles.imageFilter} />
      </View>
    </View>
  );
}
