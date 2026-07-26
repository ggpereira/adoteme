import Chip from "@/components/Chip";
import Icon, { IconNames } from "@/components/Icons";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { debounce } from "@/utils/debounce";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollStyle: {},
  scrollContentStyle: {
    gap: 8,
  },
  outlinedChip: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.surfaces.card,
    borderColor: COLORS.accent.default,
  },
  chipText: {
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
  currentFilterStyle: {
    backgroundColor: COLORS.primary.default,
    color: COLORS.primary.foreground,
    borderColor: COLORS.primary.default,
  },
});

const FILTERS = [
  { name: "Todos", value: "all", icon: "PawPrint" },
  { name: "Cães", value: "dogs", icon: "Dog" },
  { name: "Gatos", value: "cats", icon: "Cat" },
];

type Props = {
  onChangeFilter: (value: string) => void;
};

export default function Filters({ onChangeFilter }: Props) {
  const [value, setValue] = useState<string>("all");

  const debouncedOnChange = debounce(onChangeFilter, 500);

  const onPress = (value: string) => {
    setValue(value);
    debouncedOnChange(value);
  };

  return (
    <ScrollView
      horizontal
      style={styles.scrollStyle}
      contentContainerStyle={styles.scrollContentStyle}
    >
      {FILTERS.map((filter) => {
        const isActive = value === filter.value;
        return (
          <Chip
            style={isActive ? styles.currentFilterStyle : styles.outlinedChip}
            textStyle={{
              ...styles.chipText,
              color: isActive
                ? styles.currentFilterStyle.color
                : styles.chipText.color,
            }}
            onPress={() => {
              if (filter.value === value) return;
              onPress(filter.value);
            }}
            icon={
              <Icon
                name={filter.icon as IconNames}
                size={16}
                color={
                  isActive
                    ? styles.currentFilterStyle.color
                    : COLORS.text["card-foreground"]
                }
              />
            }
            key={filter.value}
            text={filter.name}
          />
        );
      })}
    </ScrollView>
  );
}
