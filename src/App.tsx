import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootLayout from "./routes/root";
import { COLORS } from "./styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
});

export default function App() {
  return (
    // Each screen owns its top inset, so full-bleed screens (e.g. pet details)
    // can draw under the status bar
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <RootLayout />
    </SafeAreaView>
  );
}
