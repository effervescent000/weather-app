import { activityConstants } from "../constants/activity.constants";

const baseState = {
  name: "",
  conditions: {
    apparentTemperature: [],
    probabilityOfPrecipitation: [],
    relativeHumidity: [],
    skyCover: [],
    temperature: [],
    windSpeed: [],
  },
};

const activityReducer = (state = baseState, action) => {
  switch (action.type) {
    case activityConstants.SET_ACTIVITY:
      return { ...action.activity };
    default:
      return state;
  }
};

export default activityReducer;
