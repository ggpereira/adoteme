export type RootStackParamList = {
  "home-tabs": undefined;
  "pet-details": { petId: string };
};

// Types `useNavigation()` app-wide without passing generics on every call
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
