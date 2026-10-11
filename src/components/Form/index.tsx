import Button from "@/components/Button";
import { FONTS } from "@/styles/Fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import FormItem from "./fields/FormItem";
import { buildDefaultValues } from "./schema/buildDefaultValues";
import { buildSchema } from "./schema/buildSchema";
import { isFieldRow } from "./schema/getFields";
import { FormConfig, FormItem as FormItemConfig, FormValues } from "./types";

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  submit: {
    paddingVertical: 16,
    borderRadius: 16,
  },
  submitText: {
    fontSize: FONTS.fontSize.md,
    fontWeight: FONTS.fontWeight.medium,
  },
});

function getItemKey(item: FormItemConfig) {
  return isFieldRow(item)
    ? item.fields.map((field) => field.name).join("+")
    : item.name;
}

type Props = {
  config: FormConfig;
  onSubmit: (values: FormValues) => void;
  submitLabel?: string;
};

export default function FormBuilder({
  config,
  onSubmit,
  submitLabel = "Enviar",
}: Props) {
  const schema = useMemo(() => buildSchema(config), [config]);
  const defaultValues = useMemo(() => buildDefaultValues(config), [config]);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  return (
    <View style={styles.container}>
      {config.fields.map((item) => (
        <FormItem key={getItemKey(item)} item={item} control={control} />
      ))}
      <Button
        text={submitLabel}
        growToParentWidth
        style={styles.submit}
        textStyle={styles.submitText}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
