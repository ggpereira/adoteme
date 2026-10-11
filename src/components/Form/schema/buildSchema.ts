import { z } from "zod";
import { FieldConfig, FieldType, FormConfig } from "../types";
import { getFields } from "./getFields";
import { applyRule, FieldSchema } from "./rules";

const BASE_SCHEMAS: Record<FieldType, () => FieldSchema> = {
  text: () => z.string(),
  number: () => z.string(),
  select: () => z.string(),
  segmented: () => z.string(),
  photo: () => z.string().nullable(),
};

function buildFieldSchema(field: FieldConfig) {
  return (field.rules ?? []).reduce(applyRule, BASE_SCHEMAS[field.type]());
}

export function buildSchema(config: FormConfig) {
  const shape: Record<string, FieldSchema> = Object.fromEntries(
    getFields(config).map((field) => [field.name, buildFieldSchema(field)]),
  );
  return z.object(shape);
}
