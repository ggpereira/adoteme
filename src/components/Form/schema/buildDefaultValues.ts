import { FieldConfig, FormConfig, FormValues } from "../types";
import { getFields } from "./getFields";

function getDefaultValue(field: FieldConfig) {
  if (field.type === "photo") return null;
  return field.defaultValue ?? "";
}

export function buildDefaultValues(config: FormConfig): FormValues {
  return Object.fromEntries(
    getFields(config).map((field) => [field.name, getDefaultValue(field)]),
  );
}
