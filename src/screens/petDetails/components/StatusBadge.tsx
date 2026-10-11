import Chip from "@/components/Chip";
import { PetStatus } from "@/services/PetService";
import { COLORS } from "@/styles/Colors";
import { StyleSheet } from "react-native";

const STATUS_VARIANTS: Record<
  PetStatus,
  { label: string; background: string; text: string }
> = {
  available: {
    label: "Disponível",
    background: COLORS.feedback["success-soft"],
    text: COLORS.feedback["success-strong"],
  },
  "in-rescue": {
    label: "Em resgate",
    background: COLORS.feedback["warning-soft"],
    text: COLORS.feedback["warning-strong"],
  },
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

type Props = {
  status: PetStatus;
};

export default function StatusBadge({ status }: Props) {
  const variant = STATUS_VARIANTS[status];

  return (
    <Chip
      text={variant.label}
      style={[styles.container, { backgroundColor: variant.background }]}
      textStyle={{ color: variant.text }}
    />
  );
}
