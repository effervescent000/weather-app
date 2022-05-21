import { locationDataConstants } from "../constants/locationData.constants";

const baseState = [];

const locationDataReducer = (state = baseState, action) => {
  switch (action.type) {
    case locationDataConstants.SET_LOCATION_DATA:
      return [...action.locationData];
    default:
      return state;
  }
};

export default locationDataReducer;
