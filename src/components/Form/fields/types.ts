import { Control } from "react-hook-form";
import { FieldConfig, FormValues } from "../types";

export type FieldProps<C extends FieldConfig> = {
  field: C;
  control: Control<FormValues>;
};
