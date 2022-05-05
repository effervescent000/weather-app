import React, { useState, useEffect, useContext } from "react";

import { weatherURLs } from "../../utils/constants";
import { LocationContext } from "../../utils/location-context";
import weatherApiService from "../../utils/weatherApiService";
import WeatherCard from "./weather-card";

const WeatherPanel = (props) => {
  const { currentLocation } = useContext(LocationContext);
  const [gridData, setGridData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (Object.keys(currentLocation).length > 0) {
      weatherApiService.GET(
        weatherURLs({ coords: [currentLocation.latitude, currentLocation.longitude] }).GETGRID,
        (response) => {
          const data = response.data.properties;
          setGridData({ gridX: data.gridX, gridY: data.gridY, office: data.cwa });
        }
      );
    }
  }, [currentLocation]);

  useEffect(() => {
    if (Object.keys(gridData).length > 0) {
      weatherApiService.GET(
        weatherURLs({ office: gridData.office, gridX: gridData.gridX, gridY: gridData.gridY })
          .FORECAST,
        (response) => setWeatherData(response.data.properties)
      );
    }
  }, [gridData]);

  const matchTime = (targetTime, weatherArray) => {
    for (const item of weatherArray) {
      if (
        Date.parse(item.validTime.substring(0, item.validTime.length - 5)) >= Date.parse(targetTime)
      ) {
        return item;
      }
    }
  };

  return (
    <div>
      {Object.keys(weatherData).length && (
        <WeatherCard temp={matchTime(new Date(), weatherData.temperature.values)} primary />
      )}
    </div>
  );
};

export default WeatherPanel;
