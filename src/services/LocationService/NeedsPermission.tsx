import { Contained } from "@/components/Button/Contained";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { Linking, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingHorizontal: 42,
    gap: 16,
  },
  text: {
    textAlign: "center",
  },
});

export default function NeedsPermission() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O mapa precisa de sua permissão para acessar a sua localização
      </Text>
      <Icon
        name="LocateOff"
        size={32}
        color={COLORS.text["muted-foreground"]}
      />
      <Contained
        backgroundColor={COLORS.accent.foreground}
        text="Habilitar localização"
        onPress={() => {
          Linking.openSettings();
        }}
      />
    </View>
  );
}
