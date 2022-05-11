import { locationConstants } from "../constants/location.constants";

const baseState = {
  id: 0,
  name: "",
  country: "",
  countryCode: "",
  region: "",
  regionCode: "",
  latitude: 0,
  longitude: 0,
};

const locationReducer = (state = baseState, action) => {
  switch (action.type) {
    case locationConstants.SET_LOCATION:
      return { ...action.location };
    default:
      return state;
  }
};

export default locationReducer;
