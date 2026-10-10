import Form from "@/components/Form";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function RescueScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView style={styles.container}>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
}
