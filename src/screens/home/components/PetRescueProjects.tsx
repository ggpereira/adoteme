import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { PROJECTS } from "@/utils/petRescueProjects";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  sectionTitle: {
    fontWeight: FONTS.fontWeight.medium,
    fontSize: FONTS.fontSize.base,
    color: COLORS.base.foreground,
  },
  content: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  imageCard: {
    flex: 1,
    position: "relative",
    elevation: 1,
    borderRadius: 12,
    overflow: "hidden",
    height: 105,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default function PetRescueProjects() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Apoie estes projetos</Text>
      <View style={styles.content}>
        {PROJECTS.map((v, index) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.imageCard}
            key={`project-img-${index}`}
            onPress={() => {
              Linking.openURL(v.url);
            }}
          >
            <Image
              resizeMethod="scale"
              resizeMode="cover"
              style={styles.image}
              source={v.image}
            />
            <LinearGradient
              style={styles.overlay}
              colors={["transparent", "transparent", "rgba(0, 0, 0, 0.15)"]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
