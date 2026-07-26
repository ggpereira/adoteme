import Icon from "@/components/Icons";
import ExploreScreen from "@/screens/explore";
import HomeScreen from "@/screens/home";
import MapScreen from "@/screens/map";
import ProfileScreen from "@/screens/profile";
import RescueScreen from "@/screens/rescue";
import { COLORS } from "@/styles/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomTabs = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    borderTopWidth: 0,
    height: 65,
    paddingTop: 5,
    backgroundColor: COLORS.base.background,
    opacity: 0.95,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default function HomeTabLayout() {
  const { bottom } = useSafeAreaInsets();
  const mergedStyles = useMemo(
    () => StyleSheet.compose(styles.tabContainer, { paddingBottom: bottom }),
    [bottom],
  );

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: mergedStyles,
        tabBarActiveTintColor: COLORS.primary.default,
        tabBarInactiveTintColor: COLORS.text["muted-foreground"],
      }}
    >
      <BottomTabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Icon name="House" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ size, color }) => (
            <Icon name="Search" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="map"
        component={MapScreen}
        options={{
          title: "Mapa",
          tabBarIcon: ({ size, color }) => (
            <Icon name="Map" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="rescue"
        component={RescueScreen}
        options={{
          title: "Resgate",
          tabBarIcon: ({ size, color }) => (
            <Icon name="TriangleAlert" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <Icon name="User" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
