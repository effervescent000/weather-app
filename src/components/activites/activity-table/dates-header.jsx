import React from "react";

import { NUM_DAYS } from "../../../constants/activity.constants";

const DatesHeader = ({ date }) => {
  const renderDates = () => {
    const datesArray = [];
    for (let i = 0; i < NUM_DAYS; i++) {
      datesArray.push(renderDate(i));
    }
    return datesArray;
  };

  const renderDate = (i) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1 + i);
    return <th key={i}>{`${newDate.getMonth() + 1}/${newDate.getDate()}`}</th>;
  };

  return <thead>{renderDates()}</thead>;
};

export default DatesHeader;
