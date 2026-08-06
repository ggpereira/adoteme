import Map from "@/components/Map";
import Text from "@/components/Text";
import { withLocationService } from "@/services/withLocationService";
import { globalStyles } from "@/styles/global";
import MapStyles from "@/styles/MapStyles";
import { LocationObject } from "expo-location";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

type Props = {
  location: LocationObject;
};

function MapScreen({ location }: Props) {
  const { width } = useWindowDimensions();
  const { latitude, longitude } = location.coords;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.screenTitle}>Mapa de resgates</Text>
          <Text style={styles.subtitle}>
            7 solicitações de resgate na sua região
          </Text>
        </View>
        <View style={[{ flex: 1, width }]}>
          <Map
            camera={{
              center: {
                latitude,
                longitude,
              },
              heading: 0,
              pitch: 0,
              altitude: 50,
              zoom: 16,
            }}
            customMapStyle={MapStyles.retroMapStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default withLocationService(MapScreen);
