import { LocationObject } from "expo-location";
import { useEffect, useState } from "react";
import { getUserLocation } from "./getUserLocation";
import NeedsPermission from "./NeedsPermission";

export const withLocationService = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [location, setLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
      getUserLocation().then(setLocation).catch(console.error);
    }, []);

    if (!location) {
      return <NeedsPermission />;
    }

    return <Component {...props} location={location} />;
  };
};
