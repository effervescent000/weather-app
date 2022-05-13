import React from "react";
import { useSelector } from "react-redux";

const TableCell = ({ weather }) => {
  const activity = useSelector((state) => state.activity);

  const checkConditions = () => {
    for (const activityKey of Object.keys(activity.conditions)) {
      // debugger;
      if (
        weather[activityKey].value > activity.conditions[activityKey][1] ||
        weather[activityKey].value < activity.conditions[activityKey][0]
      ) {
        return {};
      }
    }
    return { backgroundColor: "$light-teal" };
  };

  return <td style={checkConditions()} />;
};

export default TableCell;
