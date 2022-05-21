import React from "react";
import { useSelector } from "react-redux";

import { matchWeatherToTime } from "../../../utils/utils";

import TableCell from "./table-cell";

const TableRow = ({ date, weatherForDay }) => {
  const activity = useSelector((state) => state.activity);

  const createCells = () => {
    const makeWeatherForTime = (hour) => {
      const weatherForTime = {};
      for (const key of Object.keys(activity.conditions)) {
        const newDate = new Date(date);
        newDate.setHours(hour, 0, 0, 0);
        weatherForTime[key] = matchWeatherToTime(newDate, weatherForDay[key]);
      }
      return weatherForTime;
    };

    const cells = [];

    for (let i = 0; i < 24; i++) {
      const cellId = `${date.getMonth() + 1}${date.getDate()}${i}`;
      cells.push(<TableCell key={cellId} id={cellId} weather={makeWeatherForTime(i)} />);
    }

    return cells;
  };

  return (
    <tr>
      <th>{`${date.getMonth() + 1}/${date.getDate()}`}</th>
      {weatherForDay && createCells()}
    </tr>
  );
};

export default TableRow;
