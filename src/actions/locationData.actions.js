import { locationDataConstants } from "../constants/locationData.constants";

export const setLocationData = (locationData) => ({
  type: locationDataConstants.SET_LOCATION_DATA,
  locationData,
});
