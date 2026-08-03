import Map from "@/components/Map";
import Text from "@/components/Text";
import MapStyles from "@/styles/MapStyles";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function MapScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Mapa de resgates</Text>
          <Text>7 solicitações de resgate na sua região</Text>
        </View>
        <View style={[{ width, height: height * 0.65 }]}>
          <Map
            camera={{
              center: {
                latitude: -29.698611,
                longitude: -53.794444,
              },
              heading: 0,
              pitch: 0,
              altitude: 50,
              zoom: 14,
            }}
            customMapStyle={MapStyles.retroMapStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
