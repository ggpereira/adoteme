import { StyleSheet, View } from "react-native";
import MapView, { MapViewProps, PROVIDER_GOOGLE } from "react-native-maps";

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

type Props = {} & MapViewProps;

export default function Map(props: Props) {
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} {...props} />
    </View>
  );
}
