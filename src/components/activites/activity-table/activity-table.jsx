import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { weatherKeys } from "../../../constants/constants";
import { NUM_DAYS } from "../../../constants/activity.constants";
import { getEventsForDate } from "../../../utils/utils";

import TableRow from "./table-row";
import HoursHeader from "./hours-header";

const ActivityTable = () => {
  const weather = useSelector((state) => state.weather);
  const [weatherArray, setWeatherArray] = useState([]);
  const today = new Date();

  useEffect(() => {
    if (Object.keys(weather.temperature).length) {
      setWeatherArray(makeWeatherArrays());
    }
  }, [weather]);

  const makeWeatherArrays = () => {
    const assembleWeatherArray = (date) => {
      const dayConditions = {};
      for (const key of weatherKeys) {
        dayConditions[key] = getEventsForDate(date, weather[key].values);
      }
      return dayConditions;
    };

    today.setHours(0);
    const weatherArrays = [];
    for (let i = 0; i < NUM_DAYS; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      weatherArrays.push(assembleWeatherArray(newDate));
    }
    return weatherArrays;
  };

  const renderTableBody = () => {
    const newDate = new Date(today);
    const tableRows = [];
    for (let i = 0; i < NUM_DAYS; i++) {
      newDate.setDate(today.getDate() + i);
      tableRows.push(<TableRow key={i} date={new Date(newDate)} weatherForDay={weatherArray[i]} />);
    }

    return <tbody>{tableRows}</tbody>;
  };

  return (
    <div className="activity-table-panel">
      <table>
        <HoursHeader />
        {weatherArray && renderTableBody()}
      </table>
    </div>
  );
};

export default ActivityTable;
