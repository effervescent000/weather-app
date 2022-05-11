import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { activityConstants } from "../../../constants/activity.constants";

const ActivityCard = ({ activity }) => {
  const dispatch = useDispatch();
  const currentActivity = useSelector((state) => state.activity);
  const setActivity = () => dispatch({ type: activityConstants.SET_ACTIVITY, activity });

  return (
    <div
      className={`activity-card${activity.name === currentActivity.name ? " active" : ""}`}
      onClick={setActivity}
    >
      {activity.name}
    </div>
  );
};

export default ActivityCard;
