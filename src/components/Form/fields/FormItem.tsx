import { Control } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { isFieldRow } from "../schema/getFields";
import { FieldConfig, FormItem as FormItemConfig, FormValues } from "../types";
import { getFieldComponent } from "./registry";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
});

type Props = {
  item: FormItemConfig;
  control: Control<FormValues>;
};

function Field({
  field,
  control,
}: { field: FieldConfig } & Omit<Props, "item">) {
  const Component = getFieldComponent(field.type);
  return <Component field={field} control={control} />;
}

export default function FormItem({ item, control }: Props) {
  if (!isFieldRow(item)) {
    return <Field field={item} control={control} />;
  }

  return (
    <View style={styles.row}>
      {item.fields.map((field) => (
        <View key={field.name} style={styles.rowItem}>
          <Field field={field} control={control} />
        </View>
      ))}
    </View>
  );
}
