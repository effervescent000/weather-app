import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TableCell = ({ id, weather }) => {
  const activity = useSelector((state) => state.activity);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(checkConditions());
  }, [weather, activity]);

  const checkConditions = () => {
    if (activity.name && Object.keys(weather).length) {
      for (const activityKey of Object.keys(activity.conditions)) {
        if (!weather[activityKey]) {
          return { backgroundColor: "red" };
        }
        if (
          weather[activityKey].value > activity.conditions[activityKey][1] ||
          weather[activityKey].value < activity.conditions[activityKey][0]
        ) {
          return {};
        }
      }
      return { backgroundColor: "#17b890" };
    }
    return {};
  };

  return <td data-testid={`background-${id}`} id={`background-${id}`} style={style} />;
};

export default TableCell;
