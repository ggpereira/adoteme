import { useController } from "react-hook-form";
import Photo from "../components/Photo";
import { PhotoFieldConfig } from "../types";
import { FieldProps } from "./types";

export default function PhotoField({
  field,
  control,
}: FieldProps<PhotoFieldConfig>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name: field.name, control });

  return (
    <Photo
      label={field.label}
      placeholder={field.placeholder}
      cameraType={field.cameraType}
      value={value}
      onChange={onChange}
      error={error?.message}
    />
  );
}
