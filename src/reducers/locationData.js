import { locationDataConstants } from "../constants/locationData.constants";

const baseState = [
  {
    id: 0,
    wikiDataId: "",
    type: "",
    city: "",
    name: "",
    country: "",
    countryCode: "",
    region: "",
    regionCode: "",
    latitude: 0,
    longitude: 0,
    population: 0,
  },
];

const locationDataReducer = (state = baseState, action) => {
  switch (action.type) {
    case locationDataConstants.SET_LOCATION_DATA:
      return [...action.locationData];
    default:
      return state;
  }
};
export default locationDataReducer;
