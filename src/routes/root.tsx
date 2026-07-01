import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabLayout from "./home";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-tabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home-tabs" component={HomeTabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
