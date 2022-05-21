import React from "react";

import ActivitySelectorPanel from "./activity-selector/activity-selector-panel";
import ActivityTable from "./activity-table/activity-table";

const ActivitiesWrapper = (props) => {
  return (
    <div className="activities grid-two-cols">
      <ActivitySelectorPanel />
      <ActivityTable />
    </div>
  );
};

export default ActivitiesWrapper;
