import { COLORS } from "@/styles/Colors";
import { BlurTargetView, BlurView } from "expo-blur";
import { createRef, RefObject } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  target: {
    flex: 1,
    backgroundColor: COLORS.base.background,
  },
  overlay: {
    backgroundColor: "rgba(253, 246, 238, 0.6)",
  },
});

// Android blurs only the content inside a BlurTargetView, so each tab screen
// gets its own target and the tab bar blurs the focused screen's one.
const targets: Record<string, RefObject<View | null>> = {};

function getBlurTarget(routeName: string) {
  targets[routeName] ??= createRef<View>();
  return targets[routeName];
}

type ScreenLayoutProps = {
  route: { name: string };
  children: React.ReactElement;
};

export function BlurScreenLayout({ route, children }: ScreenLayoutProps) {
  return (
    <BlurTargetView ref={getBlurTarget(route.name)} style={styles.target}>
      {children}
    </BlurTargetView>
  );
}

type Props = {
  routeName: string;
};

export default function TabBarBlur({ routeName }: Props) {
  return (
    <BlurView
      blurTarget={getBlurTarget(routeName)}
      blurMethod="dimezisBlurViewSdk31Plus"
      intensity={40}
      tint="light"
      style={[StyleSheet.absoluteFill, styles.overlay]}
    />
  );
}
