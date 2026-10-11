import type { CameraType } from "expo-image-picker";
import type { KeyboardTypeOptions } from "react-native";

type NumericRuleType = "minLength" | "maxLength" | "min" | "max";

// One union member per rule type, so `Extract<FieldRule, { type: T }>`
// narrows to the exact rule shape.
type NumericRule = {
  [T in NumericRuleType]: { type: T; value: number; message?: string };
}[NumericRuleType];

export type FieldRule =
  | { type: "required"; message?: string }
  | NumericRule
  | { type: "pattern"; value: RegExp; message?: string };

export type RuleType = FieldRule["type"];

export type SelectOption = {
  id: string;
  label: string;
};

export type SegmentedOption = SelectOption & {
  activeColor: string;
  activeTextColor: string;
};

type BaseField = {
  name: string;
  label: string;
  placeholder?: string;
  rules?: FieldRule[];
};

export type TextFieldConfig = BaseField & {
  type: "text";
  defaultValue?: string;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export type NumberFieldConfig = BaseField & {
  type: "number";
  defaultValue?: string;
};

export type SelectFieldConfig = BaseField & {
  type: "select";
  options: SelectOption[];
  defaultValue?: string;
};

export type SegmentedFieldConfig = BaseField & {
  type: "segmented";
  options: SegmentedOption[];
  defaultValue?: string;
};

// The photo picker is self-explanatory, so its label is optional
export type PhotoFieldConfig = Omit<BaseField, "label"> & {
  label?: string;
  type: "photo";
  cameraType?: CameraType;
};

export type FieldConfig =
  | TextFieldConfig
  | NumberFieldConfig
  | SelectFieldConfig
  | SegmentedFieldConfig
  | PhotoFieldConfig;

export type FieldType = FieldConfig["type"];

// Layout node: renders its fields side by side. It holds no value itself.
export type FieldRow = {
  type: "row";
  fields: FieldConfig[];
};

export type FormItem = FieldConfig | FieldRow;

export type FormConfig = {
  fields: FormItem[];
};

export type FieldValue = string | null;

export type FormValues = Record<string, FieldValue>;
