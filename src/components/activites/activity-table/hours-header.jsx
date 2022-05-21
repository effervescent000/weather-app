import React from "react";

const HoursHeader = () => {
  const renderHours = () => {
    const renderHour = (i) => {
      return <th key={i}>{i}</th>;
    };

    const hoursArray = [<th key={"empty cell"} />];
    for (let i = 0; i < 24; i++) {
      hoursArray.push(renderHour(i));
    }
    return hoursArray;
  };

  return (
    <thead>
      <tr>{renderHours()}</tr>
    </thead>
  );
};

export default HoursHeader;
