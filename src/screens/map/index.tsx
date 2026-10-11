import Map from "@/components/Map";
import Text from "@/components/Text";
import { globalStyles } from "@/styles/global";
import MapStyles from "@/styles/MapStyles";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

function MapScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Text style={globalStyles.screenTitle}>Mapa de resgates</Text>
        <Text style={globalStyles.screenSubtitle}>
          7 solicitações de resgate na sua região
        </Text>
      </View>
      <View style={styles.map}>
        <Map
          camera={{
            heading: 0,
            pitch: 0,
            altitude: 50,
            zoom: 16,
          }}
          customMapStyle={MapStyles.retroMapStyle}
        />
      </View>
    </SafeAreaView>
  );
}

export default MapScreen;
