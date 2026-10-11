import { useController } from "react-hook-form";
import Select from "../components/Select";
import { SelectFieldConfig } from "../types";
import { FieldProps } from "./types";

export default function SelectField({
  field,
  control,
}: FieldProps<SelectFieldConfig>) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name: field.name, control });

  return (
    <Select
      label={field.label}
      placeholder={field.placeholder}
      options={field.options}
      value={value ?? ""}
      onChange={onChange}
      onBlur={onBlur}
      error={error?.message}
    />
  );
}
