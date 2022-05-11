import { activityConstants } from "../constants/activity.constants";

export const setActivity = (activity) => ({
  type: activityConstants.SET_ACTIVITY,
  activity,
});
