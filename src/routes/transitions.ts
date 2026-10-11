import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Dimensions, Easing } from "react-native";

type SceneStyleInterpolator = NonNullable<
  BottomTabNavigationOptions["sceneStyleInterpolator"]
>;
type TransitionSpec = NonNullable<BottomTabNavigationOptions["transitionSpec"]>;

// The app is portrait-locked (app.config.ts), so the width never changes
const { width } = Dimensions.get("window");

// progress is -1 for tabs left of the active one, 0 for the active tab and
// 1 for tabs to its right, so the slide direction follows the tab order.
export const forSlide: SceneStyleInterpolator = ({ current }) => ({
  sceneStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-width, 0, width],
        }),
      },
    ],
  },
});

export const SlideSpec: TransitionSpec = {
  animation: "timing",
  config: {
    duration: 250,
    easing: Easing.out(Easing.cubic),
  },
};
