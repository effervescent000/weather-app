import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { weatherKeys } from "../../../constants/constants";
import { NUM_DAYS } from "../../../constants/activity.constants";
import { getEventsInDate } from "../../../utils/utils";

import DatesHeader from "./dates-header";

const ActivityTable = (props) => {
  const weather = useSelector((state) => state.weather);
  const [weatherArrays, setWeatherArrays] = useState([]);

  useEffect(() => {
    if (Object.keys(weather.temperature).length) {
      setWeatherArrays(makeWeatherArrays());
    }
  }, [weather]);

  const makeWeatherArrays = () => {
    const assembleWeatherArray = (date) => {
      const dayConditionsArray = [];
      for (const key of weatherKeys) {
        dayConditionsArray.push({
          [key]: getEventsInDate(date, weather[key].values),
        });
      }
      return dayConditionsArray;
    };
    /* what I expect the return to look like:
      [
        an array of objects for each day, so like:
        [
          { 
            temperature: [
              {validTime: sometime, value: somenumber}, 
              {validTime, value}...
            ],
            skyCover: [
              {validTime, value}...
            ]
          },
          { 
            temperature: [
              {validTime: sometime, value: somenumber}, 
              {validTime, value}...
            ],
            skyCover: [
              {validTime, value}...
            ]
          },
        ]
      ]
    */
    const today = new Date();
    today.setHours(0);
    const weatherArrays = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      weatherArrays.push(assembleWeatherArray(newDate));
    }
    // console.log(weatherArrays);
    return weatherArrays;
  };

  return (
    <div className="activity-table-panel">
      <table>
        <DatesHeader date={new Date()} />
      </table>
    </div>
  );
};

export default ActivityTable;
