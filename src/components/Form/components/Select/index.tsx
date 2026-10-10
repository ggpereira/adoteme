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
import { styles } from "./styles";

const ROTATION_DURATION = 200;

export default function Select() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const rotation = useDerivedValue(() =>
    withTiming(dropdownOpen ? 180 : 0, { duration: ROTATION_DURATION }),
  );

  const chevronAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const items = [
    { id: "item1-1", label: "item1" },
    { id: "item2-2", label: "item2" },
    { id: "item3-3", label: "item3" },
  ];

  const handleSelect = (value: string) => {
    console.log("selected", value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Campo seleção</Text>
      <Dropdown
        items={items}
        onItemPress={handleSelect}
        isExpanded={dropdownOpen}
        onRequestDismiss={() => {
          setDropdownOpen(false);
        }}
        trigger={
          <Pressable
            style={styles.inputContainer}
            onPress={() => {
              setDropdownOpen(true);
            }}
          >
            <Text style={styles.placeHolderStyle}>Selected item</Text>
            <Animated.View style={chevronAnimatedStyle}>
              <Icon name="ChevronDown" size={20} />
            </Animated.View>
          </Pressable>
        }
      />
    </View>
  );
}
