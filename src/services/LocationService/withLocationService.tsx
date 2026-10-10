import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { useEffect, useState } from "react";
import NeedsPermission from "./NeedsPermission";

export const withLocationService = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [location, setLocation] = useState<LocationObject | null>(null);

    const getCurrentLocation = async (
      onSuccess: (location: Location.LocationObject | null) => void,
      onError: (message: string) => void,
    ) => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          throw Error("Permission to access location was denied");
        }
        if (!(await Location.hasServicesEnabledAsync())) {
          throw Error("Location services are disabled");
        }
        let result: LocationObject | null;
        try {
          result = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });
        } catch {
          // Emulators (and devices without a fresh GPS fix) often fail here;
          // fall back to the last cached position.
          result = await Location.getLastKnownPositionAsync();
        }
        if (!result) {
          throw Error("Current location is unavailable");
        }
        onSuccess(result);
      } catch (e) {
        onError(e as string);
      }
    };

    useEffect(() => {
      getCurrentLocation(
        (userLocation) => {
          setLocation(userLocation);
        },
        (error) => {
          console.error(error);
        },
      );
    }, []);

    if (!location) {
      return <NeedsPermission />;
    }

    return <Component {...props} location={location} />;
  };
};
