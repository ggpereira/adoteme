import Icon from "@/components/Icons";
import HomeScreen from "@/screens/home";
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
    backgroundColor: COLORS.base.background,
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
            intensity={40}
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
        component={HomeScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ size, color }) => (
            <Icon name="Search" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="map"
        component={HomeScreen}
        options={{
          title: "Mapa",
          tabBarIcon: ({ size, color }) => (
            <Icon name="Map" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="rescue"
        component={HomeScreen}
        options={{
          title: "Resgate",
          tabBarIcon: ({ size, color }) => (
            <Icon name="TriangleAlert" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={HomeScreen}
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
