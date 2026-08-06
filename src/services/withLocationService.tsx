import * as Location from "expo-location";
import { useEffect, useState } from "react";

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

export const withLocationService = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [location, setLocation] = useState<Location.LocationObject | null>(
      null,
    );

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
    return <Component {...props} location={location} />;
  };
};
