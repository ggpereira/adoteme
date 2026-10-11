import { useController } from "react-hook-form";
import Segmented from "../components/Segmented";
import { SegmentedFieldConfig } from "../types";
import { FieldProps } from "./types";

export default function SegmentedField({
  field,
  control,
}: FieldProps<SegmentedFieldConfig>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name: field.name, control });

  return (
    <Segmented
      label={field.label}
      options={field.options}
      value={value ?? ""}
      onChange={onChange}
      error={error?.message}
    />
  );
}
