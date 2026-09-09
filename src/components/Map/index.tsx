import { withLocationService } from "@/services/LocationService/withLocationService";
import { LocationObject } from "expo-location";
import { StyleSheet, View } from "react-native";
import MapView, {
  Camera,
  MapViewProps,
  PROVIDER_GOOGLE,
} from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

type Props = {
  location: LocationObject;
} & MapViewProps;

function Map(props: Props) {
  const { camera, location } = props;
  return (
    <View style={styles.container}>
      <MapView
        {...props}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        camera={{
          ...(camera as Camera),
          center: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        }}
      />
    </View>
  );
}

export default withLocationService(Map);
