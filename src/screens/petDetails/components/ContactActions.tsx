import Button from "@/components/Button";
import Icon from "@/components/Icons";
import { FONTS } from "@/styles/Fonts";
import { Linking, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
    gap: 8,
    paddingVertical: 12,
    borderRadius: 16,
  },
  text: {
    fontSize: FONTS.fontSize.base,
    fontWeight: FONTS.fontWeight.normal,
  },
});

type Props = {
  phone: string;
  email: string;
};

export default function ContactActions({ phone, email }: Props) {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        text="Ligar"
        growToParentWidth
        style={styles.button}
        textStyle={styles.text}
        leftElement={({ color }) => (
          <Icon name="Phone" size={15} color={color} />
        )}
        onPress={() => Linking.openURL(`tel:${phone}`)}
      />
      <Button
        mode="outlined"
        text="E-mail"
        growToParentWidth
        style={styles.button}
        textStyle={styles.text}
        leftElement={({ color }) => (
          <Icon name="Mail" size={15} color={color} />
        )}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      />
    </View>
  );
}
