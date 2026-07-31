import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  scrollElement: {
    opacity: 1,
  },
  static: {
    position: "absolute",
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

export default function Marquee({ textStyle, text, duration = 4000 }: Props) {
  const parentWidth = useSharedValue(0);
  const childrenWidth = useSharedValue(0);

  const sharedOffset = useDerivedValue(() => {
    if (childrenWidth.value <= parentWidth.value) return 0;
    const offset = parentWidth.value - childrenWidth.value - 5;
    return withRepeat(
      withDelay(
        3000,
        withSequence(
          withTiming(offset, { duration }),
          withTiming(0, { duration }),
        ),
      ),
      -1,
    );
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedOffset.value }],
      opacity: sharedOffset.value != 0 ? 1 : 0,
    };
  }, []);

  const animatedStaticText = useAnimatedStyle(() => {
    return {
      opacity: sharedOffset.value != 0 ? 0 : 1,
    };
  });

  const setParentWidth = (width: number) => {
    parentWidth.value = width;
  };

  const setChildrenWidth = (width: number) => {
    childrenWidth.value = width;
  };

  return (
    <View
      style={{
        flexShrink: 1,
        flexDirection: "row",
        flex: 1,
      }}
      pointerEvents="box-none"
      onLayout={(ev) => setParentWidth(ev.nativeEvent.layout.width)}
    >
      <MeasureElement
        onLayout={(ev) => {
          setChildrenWidth(ev);
        }}
      >
        <Animated.Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[textStyle, animatedText]}
        >
          {text}
        </Animated.Text>
        <Animated.Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[
            textStyle,
            styles.static,
            animatedStaticText,
            { width: parentWidth },
          ]}
        >
          {text}
        </Animated.Text>
      </MeasureElement>
    </View>
  );
}
