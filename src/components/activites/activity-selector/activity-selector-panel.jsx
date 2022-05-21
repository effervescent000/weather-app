import React from "react";

import { activitiesArray } from "../../../constants/activity.constants";
import ActivityCard from "./activity-card";

const ActivitySelectorPanel = (props) => {
  return (
    <div className="activities-selector-panel">
      {activitiesArray.map((activity) => (
        <ActivityCard key={activity.name} activity={activity} />
      ))}
    </div>
  );
};

export default ActivitySelectorPanel;
