import { useController } from "react-hook-form";
import NumberInput from "../components/NumberInput";
import { NumberFieldConfig } from "../types";
import { FieldProps } from "./types";

export default function NumberField({
  field,
  control,
}: FieldProps<NumberFieldConfig>) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name: field.name, control });

  return (
    <NumberInput
      label={field.label}
      placeholder={field.placeholder ?? ""}
      value={value ?? ""}
      onChangeText={onChange}
      onBlur={onBlur}
      error={error?.message}
    />
  );
}
