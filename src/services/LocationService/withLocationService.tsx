import { LocationObject } from "expo-location";
import { ComponentType, useEffect, useState } from "react";
import { getUserLocation } from "./getUserLocation";
import NeedsPermission from "./NeedsPermission";

type LocationProps = { location: LocationObject };

export const withLocationService = <P extends LocationProps>(
  Component: ComponentType<P>,
) => {
  function WithLocationService(props: Omit<P, keyof LocationProps>) {
    const [location, setLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
      getUserLocation().then(setLocation).catch(console.error);
    }, []);

    if (!location) {
      return <NeedsPermission />;
    }

    return <Component {...(props as P)} location={location} />;
  }

  WithLocationService.displayName = `withLocationService(${
    Component.displayName ?? Component.name
  })`;

  return WithLocationService;
};
