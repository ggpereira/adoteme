import Icon from "@/components/Icons";
import ExploreScreen from "@/screens/explore";
import HomeScreen from "@/screens/home";
import MapScreen from "@/screens/map";
import ProfileScreen from "@/screens/profile";
import RescueScreen from "@/screens/rescue";
import { COLORS } from "@/styles/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const BottomTabs = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    height: 70,
    paddingTop: 5,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default function HomeTabLayout() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        tabBarActiveTintColor: COLORS.primary.default,
        tabBarInactiveTintColor: COLORS.text["muted-foreground"],
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
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
