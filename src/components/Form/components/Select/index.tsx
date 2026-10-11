import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { SelectOption } from "../../types";
import FieldError from "../FieldError";
import { fieldStyles } from "../fieldStyles";
import { styles } from "./styles";

const ROTATION_DURATION = 200;

type Props = {
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

export default function Select({
  label,
  placeholder = "Selecione",
  options,
  value,
  onChange,
  onBlur,
  error,
}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const rotation = useDerivedValue(() =>
    withTiming(dropdownOpen ? 180 : 0, { duration: ROTATION_DURATION }),
  );

  const chevronAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const selectedOption = options.find((option) => option.id === value);

  const closeDropdown = () => {
    setDropdownOpen(false);
    onBlur?.();
  };

  return (
    <View style={fieldStyles.container}>
      <Text style={fieldStyles.label}>{label}</Text>
      <Dropdown
        items={options}
        onItemPress={onChange}
        isExpanded={dropdownOpen}
        onRequestDismiss={closeDropdown}
        trigger={
          <Pressable
            style={[styles.inputContainer, error ? fieldStyles.boxError : null]}
            onPress={() => {
              setDropdownOpen(true);
            }}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.value,
                selectedOption ? fieldStyles.text : fieldStyles.placeholder,
              ]}
            >
              {selectedOption?.label ?? placeholder}
            </Text>
            <Animated.View style={chevronAnimatedStyle}>
              <Icon
                name="ChevronDown"
                size={18}
                color={fieldStyles.placeholder.color}
              />
            </Animated.View>
          </Pressable>
        }
      />
      <FieldError message={error} />
    </View>
  );
}
