import { useController } from "react-hook-form";
import Input from "../components/Input";
import { TextFieldConfig } from "../types";
import { FieldProps } from "./types";

export default function TextField({
  field,
  control,
}: FieldProps<TextFieldConfig>) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name: field.name, control });

  return (
    <Input
      label={field.label}
      placeholder={field.placeholder ?? ""}
      multiline={field.multiline}
      keyboardType={field.keyboardType}
      value={value ?? ""}
      onChangeText={onChange}
      onBlur={onBlur}
      error={error?.message}
    />
  );
}
