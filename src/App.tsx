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
    <SafeAreaView style={styles.container}>
      <RootLayout />
    </SafeAreaView>
  );
}
