import Text from "@/components/Text";
import {
  TextInput as NativeTextInput,
  TextInputProps,
  View,
} from "react-native";
import { styles } from "./styles";

export type InputProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
} & TextInputProps;

export default function Input({
  label,
  onChangeText,
  value,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <NativeTextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholderColor.color}
        cursorColor={styles.cursorColor.color}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
    </View>
  );
}
