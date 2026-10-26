import { MapPet } from "@/services/PetService";
import { COLORS } from "@/styles/Colors";
import { useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MapMarker, Marker } from "react-native-maps";

const MARKER_SIZE = 50;
const MARKER_BORDER = 2;

const styles = StyleSheet.create({
  customMarkerContainer: {
    width: MARKER_SIZE + MARKER_BORDER * 2,
    height: MARKER_SIZE + MARKER_BORDER * 2,
    borderRadius: MARKER_SIZE / 2 + MARKER_BORDER,
    borderWidth: MARKER_BORDER,
    borderColor: COLORS.primary.default,
    backgroundColor: COLORS.surfaces.muted,
  },
  imgMarker: {
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    // Rounded on the Image itself: the Android marker is drawn into a bitmap,
    // where a parent's overflow clipping is not reliable
    borderRadius: MARKER_SIZE / 2,
  },
});

type Props = {
  pet: Pick<MapPet, "coordinate" | "imageUrl">;
};

export default function CallRescueMarkers({ pet }: Props) {
  const { coordinate, imageUrl } = pet;
  const markerRef = useRef<MapMarker>(null);

  // Android snapshots the marker into a bitmap before remote images finish
  // loading, so redraw once the image is ready instead of tracking every change
  const redrawMarker = () => markerRef.current?.redraw();

  return (
    <Marker ref={markerRef} coordinate={coordinate} tracksViewChanges={false}>
      <View style={styles.customMarkerContainer}>
        <Image
          style={styles.imgMarker}
          source={{ uri: imageUrl }}
          resizeMethod="resize"
          resizeMode="cover"
          // The bitmap is captured on load, so a fade-in would be frozen
          // half transparent
          fadeDuration={0}
          onLoad={redrawMarker}
        />
      </View>
    </Marker>
  );
}
