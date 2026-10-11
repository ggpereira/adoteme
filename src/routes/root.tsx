import PetDetailsScreen from "@/screens/petDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabLayout from "./home";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-tabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home-tabs" component={HomeTabLayout} />
        <Stack.Screen name="pet-details" component={PetDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
