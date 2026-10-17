import * as Location from "expo-location";
import { LocationObject } from "expo-location";

const CURRENT_POSITION_TIMEOUT_MS = 10_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), ms);
    promise
      .then(resolve, () => resolve(null))
      .finally(() => clearTimeout(timer));
  });
}

// Resolves the user's location to center the map.
// getCurrentPositionAsync may never settle when the device has no fresh fix
// (common on emulators), so it is only a fallback and always time-limited.
export async function getUserLocation(): Promise<LocationObject> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw Error("Permission to access location was denied");
  }
  if (!(await Location.hasServicesEnabledAsync())) {
    throw Error("Location services are disabled");
  }

  // The cached position is instant and accurate enough to center the map
  const lastKnown = await Location.getLastKnownPositionAsync();
  if (lastKnown) return lastKnown;

  const current = await withTimeout(
    Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced }),
    CURRENT_POSITION_TIMEOUT_MS,
  );
  if (!current) {
    throw Error("Current location is unavailable");
  }
  return current;
}
