import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <Text>Olá, Gabriel 👋</Text>
          <Text>Encontre o seu novo melhor amigo</Text>

          <View>
            <View />
            <Text>Row item</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
