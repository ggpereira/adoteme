import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  Pressable,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../Text";
import { styles } from "./styles";

type ItemProps = {
  id: string;
  label: string;
};

type Props = {
  trigger: React.ReactNode;
  isExpanded: boolean;
  onRequestDismiss: () => void;
  items: ItemProps[];
  onItemPress: (value: string) => void;
};

const OFFSET_Y = 6;

export default function Dropdown({
  trigger,
  isExpanded,
  onRequestDismiss,
  items,
  onItemPress,
}: Props) {
  const ref = useRef<View>(null);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    width: number;
  } | null>(null);

  const renderDropdownItem = useCallback(
    ({ item }: ListRenderItemInfo<ItemProps>) => {
      return (
        <TouchableOpacity
          style={styles.dropdownItem}
          onPress={() => {
            onItemPress(item.id);
            onRequestDismiss();
          }}
        >
          <Text style={styles.dropdownItemLabel}>{item.label}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  useEffect(() => {
    if (!isExpanded) {
      setPosition(null);
      return;
    }
    ref?.current?.measure((_x, _y, width, height, pageX, pageY) => {
      setPosition({ x: pageX, y: pageY + height + OFFSET_Y, width: width });
    });
  }, [isExpanded]);

  return (
    <View>
      <Modal
        visible={isExpanded && position !== null}
        transparent={true}
        statusBarTranslucent
        animationType="fade"
        onDismiss={onRequestDismiss}
        onRequestClose={() => {
          onRequestDismiss();
        }}
      >
        <StatusBar barStyle="dark-content" animated />
        <Pressable style={{ flex: 1 }} onPress={onRequestDismiss}>
          {position && (
            <View
              style={[
                styles.modalView,
                { left: position.x, top: position.y, width: position.width },
              ]}
            >
              <FlatList
                contentContainerStyle={styles.dropdownListContentContainer}
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderDropdownItem}
              />
            </View>
          )}
        </Pressable>
      </Modal>
      <View ref={ref} collapsable={false}>
        {trigger}
      </View>
    </View>
  );
}
