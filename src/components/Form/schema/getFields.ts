import { FieldConfig, FieldRow, FormConfig, FormItem } from "../types";

export function isFieldRow(item: FormItem): item is FieldRow {
  return item.type === "row";
}

// Flattens layout rows so schema and default values only see value fields
export function getFields(config: FormConfig): FieldConfig[] {
  return config.fields.flatMap((item) =>
    isFieldRow(item) ? item.fields : [item],
  );
}
