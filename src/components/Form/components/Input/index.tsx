import Text from "@/components/Text";
import {
  TextInput as NativeTextInput,
  TextInputProps,
  View,
} from "react-native";
import FieldError from "../FieldError";
import { fieldStyles } from "../fieldStyles";
import { styles } from "./styles";

export type InputProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  error?: string;
} & TextInputProps;

export default function Input({
  label,
  onChangeText,
  value,
  placeholder,
  error,
  multiline,
  ...rest
}: InputProps) {
  return (
    <View style={fieldStyles.container}>
      <Text style={fieldStyles.label}>{label}</Text>
      <NativeTextInput
        style={[
          styles.inputStyle,
          multiline ? styles.multiline : null,
          error ? fieldStyles.boxError : null,
        ]}
        placeholder={placeholder}
        placeholderTextColor={fieldStyles.placeholder.color}
        cursorColor={fieldStyles.placeholder.color}
        onChangeText={onChangeText}
        value={value}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        {...rest}
      />
      <FieldError message={error} />
    </View>
  );
}
