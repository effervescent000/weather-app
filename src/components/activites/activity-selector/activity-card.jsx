import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { activityConstants } from "../../../constants/activity.constants";

const ActivityCard = ({ activity }) => {
  const dispatch = useDispatch();
  const currentActivity = useSelector((state) => state.activity);
  const setActivity = () => dispatch({ type: activityConstants.SET_ACTIVITY, activity });

  return (
    <div
      className={`activity-card d-flex align-items-center${
        activity.name === currentActivity.name ? " active" : ""
      }`}
      onClick={setActivity}
    >
      <div className="icon-wrapper">
        <img src={activity.icon} alt={`${activity.name} icon`} />
      </div>
      <div className="text-wrapper">{activity.name}</div>
    </div>
  );
};

export default ActivityCard;
