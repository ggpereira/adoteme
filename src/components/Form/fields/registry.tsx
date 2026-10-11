import { ComponentType } from "react";
import { FieldConfig, FieldType } from "../types";
import NumberField from "./NumberField";
import PhotoField from "./PhotoField";
import SegmentedField from "./SegmentedField";
import SelectField from "./SelectField";
import TextField from "./TextField";
import { FieldProps } from "./types";

type FieldComponents = {
  [T in FieldType]: ComponentType<
    FieldProps<Extract<FieldConfig, { type: T }>>
  >;
};

// To support a new field type: add its config to FieldConfig, create an
// adapter in this folder and register it here. FormBuilder stays unchanged.
export const FIELD_COMPONENTS: FieldComponents = {
  text: TextField,
  number: NumberField,
  select: SelectField,
  segmented: SegmentedField,
  photo: PhotoField,
};

export function getFieldComponent(type: FieldType) {
  // TS can't correlate `type` with the matching union member on lookup;
  // the mapped type above guarantees each entry receives its own config.
  return FIELD_COMPONENTS[type] as ComponentType<FieldProps<FieldConfig>>;
}
