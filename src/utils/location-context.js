import { createContext } from "react";

export const LocationContext = createContext({
  currentLocation: {},
  setCurrentLocation: () => {},
  locationData: [],
  setLocationData: () => {}
})