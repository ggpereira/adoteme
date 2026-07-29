import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  scrollElement: {
    opacity: 1,
  },
});

function MeasureElement({
  onLayout,
  children,
}: {
  onLayout: (ev: number) => void;
  children: React.ReactNode;
}) {
  return (
    <Animated.ScrollView
      style={styles.scrollElement}
      horizontal
      pointerEvents="box-none"
    >
      <View onLayout={(ev) => onLayout(ev.nativeEvent.layout.width)}>
        {children}
      </View>
    </Animated.ScrollView>
  );
}

type Props = {
  style?: ViewStyle;
  duration?: number;
  text: string | number;
  textStyle?: TextStyle;
};

export default function Marquee({
  style,
  textStyle,
  text,
  duration = 2500,
}: Props) {
  const [childrenWidth, setChildrenWidth] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const offset = useRef<number>(0);
  const sharedOffset = useSharedValue(0);
  const animatedText = useAnimatedStyle(
    () => ({
      transform: [{ translateX: sharedOffset.value }],
    }),
    [],
  );

  useEffect(() => {
    offset.current = parentWidth - childrenWidth - 5;
  }, [childrenWidth, parentWidth]);

  useEffect(() => {
    if (parentWidth - childrenWidth === 0) return;
    sharedOffset.value = withRepeat(
      withTiming(offset.current, { duration }),
      -1,
      true,
    );

    return () => {
      cancelAnimation(sharedOffset);
    };
  }, [parentWidth, childrenWidth]);

  return (
    <View
      style={{ flexShrink: 1 }}
      pointerEvents="box-none"
      onLayout={(ev) => setParentWidth(ev.nativeEvent.layout.width)}
    >
      <MeasureElement onLayout={setChildrenWidth}>
        <Animated.Text style={[textStyle, animatedText]}>{text}</Animated.Text>
      </MeasureElement>
    </View>
  );
}
