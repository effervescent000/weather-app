import { locationConstants } from "../constants/location.constants";

export const setLocation = (location) => ({
  type: locationConstants.SET_LOCATION,
  location,
});
