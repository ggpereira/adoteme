import Icon from "@/components/Icons";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { debounce } from "@/utils/debounce";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    gap: 4,
    flexDirection: "row",
    backgroundColor: COLORS.surfaces.card,
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    borderColor: COLORS.text["muted-foreground"],
  },
  inputStyle: {
    flex: 1,
    fontFamily: FONTS.fontFamily.dmSans,
    color: COLORS.base.foreground,
  },
});

type Props = {
  onSearch: (text: string) => void;
};

export default function Search({ onSearch }: Props) {
  const [value, setValue] = useState<string>("");

  const debouncedOnSearch = debounce(onSearch, 500);

  const onChangeText = (text: string) => {
    setValue(text);
    debouncedOnSearch(text);
  };

  return (
    <View style={styles.container}>
      <Icon name="Search" size={18} color={styles.container.borderColor} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        placeholder="Buscar por nome ou raça"
        cursorColor={COLORS.text["muted-foreground"]}
        placeholderTextColor={COLORS.text["muted-foreground"]}
      />
    </View>
  );
}
