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

        const result = await Location.getCurrentPositionAsync();
        onSuccess(result);
      } catch (e) {
        onError(e as string);
      }
    };

    useEffect(() => {
      getCurrentLocation(
        (userLocation) => {
          console.log("setting", userLocation);
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
