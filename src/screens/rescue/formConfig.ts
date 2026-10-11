import { FormConfig } from "@/components/Form/types";
import { COLORS } from "@/styles/Colors";
import { CameraType } from "expo-image-picker";

export const RESCUE_FORM: FormConfig = {
  fields: [
    {
      name: "address",
      type: "text",
      label: "Localização do animal *",
      placeholder: "Rua, número, bairro",
      rules: [{ type: "required", message: "Informe a localização do animal" }],
    },
    {
      name: "phone",
      type: "text",
      label: "Seu telefone *",
      placeholder: "(11) 99999-0000",
      keyboardType: "phone-pad",
      rules: [
        { type: "required", message: "Informe seu telefone" },
        {
          type: "pattern",
          value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
          message: "Telefone inválido",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "species",
          type: "select",
          label: "Espécie",
          placeholder: "Selecione",
          options: [
            { id: "dog", label: "Cão" },
            { id: "cat", label: "Gato" },
            { id: "other", label: "Outro" },
          ],
        },
        {
          name: "condition",
          type: "select",
          label: "Condição",
          placeholder: "Selecione",
          options: [
            { id: "injured", label: "Ferido" },
            { id: "malnourished", label: "Desnutrido" },
            { id: "abandoned", label: "Abandonado" },
            { id: "lost", label: "Perdido" },
          ],
        },
      ],
    },
    {
      name: "urgency",
      type: "segmented",
      label: "Nível de urgência",
      defaultValue: "medium",
      options: [
        {
          id: "low",
          label: "Baixa",
          activeColor: COLORS.urgency.low,
          activeTextColor: COLORS.base.foreground,
        },
        {
          id: "medium",
          label: "Média",
          activeColor: COLORS.urgency.medium,
          activeTextColor: COLORS.base.foreground,
        },
        {
          id: "high",
          label: "Alta",
          activeColor: COLORS.urgency.high,
          activeTextColor: COLORS.semantic["destructive-foreground"],
        },
      ],
    },
    {
      name: "description",
      type: "text",
      label: "Descreva a situação *",
      placeholder: "Estado do animal, se está sozinho, se há risco imediato...",
      multiline: true,
      rules: [
        { type: "required", message: "Descreva a situação" },
        { type: "maxLength", value: 500 },
      ],
    },
    {
      name: "photo",
      type: "photo",
      placeholder: "Adicionar foto (opcional)",
      cameraType: CameraType.back,
    },
  ],
};
