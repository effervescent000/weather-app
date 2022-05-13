import React from "react";

const HoursHeader = () => {
  const renderHours = () => {
    const renderHour = (i) => {
      return <th key={i}>{i}</th>;
    };

    const hoursArray = [];
    for (let i = 0; i < 24; i++) {
      hoursArray.push(renderHour(i));
    }
    return hoursArray;
  };

  return <thead>{renderHours()}</thead>;
};

export default HoursHeader;
