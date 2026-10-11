import Text from "@/components/Text";
import { TouchableOpacity, View } from "react-native";
import { SegmentedOption } from "../../types";
import FieldError from "../FieldError";
import { fieldStyles } from "../fieldStyles";
import { styles } from "./styles";

type Props = {
  label: string;
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function Segmented({
  label,
  options,
  value,
  onChange,
  error,
}: Props) {
  return (
    <View style={fieldStyles.container}>
      <Text style={fieldStyles.label}>{label}</Text>
      <View style={styles.options} accessibilityRole="radiogroup">
        {options.map((option) => {
          const isActive = option.id === value;
          return (
            <TouchableOpacity
              key={option.id}
              accessibilityRole="radio"
              accessibilityState={{ selected: isActive }}
              activeOpacity={0.8}
              style={[
                styles.option,
                isActive
                  ? {
                      backgroundColor: option.activeColor,
                      borderColor: option.activeColor,
                    }
                  : null,
              ]}
              onPress={() => onChange(option.id)}
            >
              <Text
                style={[
                  fieldStyles.placeholder,
                  isActive ? { color: option.activeTextColor } : null,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <FieldError message={error} />
    </View>
  );
}
