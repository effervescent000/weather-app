import { activityConstants } from "../constants/activity.constants";

const baseState = {
  name: "",
  conditions: {},
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
