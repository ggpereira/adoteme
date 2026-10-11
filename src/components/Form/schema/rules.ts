import { z } from "zod";
import { FieldRule, FieldValue, RuleType } from "../types";

export type FieldSchema = z.ZodType<FieldValue, FieldValue>;

export type RuleApplier<T extends RuleType = RuleType> = (
  schema: FieldSchema,
  rule: Extract<FieldRule, { type: T }>,
) => FieldSchema;

type RuleAppliers = { [T in RuleType]?: RuleApplier<T> };

const toText = (value: FieldValue) => value ?? "";

const isEmpty = (value: FieldValue) => toText(value).trim() === "";

// Optional fields stay valid while empty; only `required` rejects them
const whenFilled = (check: (text: string) => boolean) => (value: FieldValue) =>
  isEmpty(value) || check(toText(value));

// Maps each rule declared in a form config to a zod refinement.
// Add a new rule here and every form using it is validated, with no change
// to FormBuilder or the field components. Rules without an applier are ignored.
export const RULE_APPLIERS: RuleAppliers = {
  required: (schema, rule) =>
    schema.refine((value) => !isEmpty(value), {
      message: rule.message ?? "Campo obrigatório",
    }),
  minLength: (schema, rule) =>
    schema.refine(
      whenFilled((text) => text.length >= rule.value),
      { message: rule.message ?? `Mínimo de ${rule.value} caracteres` },
    ),
  maxLength: (schema, rule) =>
    schema.refine(
      whenFilled((text) => text.length <= rule.value),
      { message: rule.message ?? `Máximo de ${rule.value} caracteres` },
    ),
  min: (schema, rule) =>
    schema.refine(
      whenFilled((text) => Number(text) >= rule.value),
      { message: rule.message ?? `O valor mínimo é ${rule.value}` },
    ),
  max: (schema, rule) =>
    schema.refine(
      whenFilled((text) => Number(text) <= rule.value),
      { message: rule.message ?? `O valor máximo é ${rule.value}` },
    ),
  pattern: (schema, rule) =>
    schema.refine(
      whenFilled((text) => rule.value.test(text)),
      { message: rule.message ?? "Formato inválido" },
    ),
};

export function applyRule(schema: FieldSchema, rule: FieldRule): FieldSchema {
  const applier = RULE_APPLIERS[rule.type] as RuleApplier | undefined;
  return applier ? applier(schema, rule) : schema;
}
