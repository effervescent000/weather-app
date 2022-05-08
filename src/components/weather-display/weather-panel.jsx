import React, { useState, useEffect, useContext } from "react";

import { weatherURLs } from "../../utils/constants";
import { LocationContext } from "../../utils/location-context";
import weatherApiService from "../../utils/weatherApiService";
import WeatherCard from "./weather-card";

const WeatherPanel = (props) => {
  const { currentLocation } = useContext(LocationContext);
  const [gridData, setGridData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const now = new Date();

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

  const renderWeatherCards = () => {
    const cards = [];
    const updateTime = (i) => {
      const updatedTime = new Date(now.getTime());
      updatedTime.setHours(updatedTime.getHours() + i);
      console.log(now);
      return updatedTime;
    };
    cards.push(
      <WeatherCard
        primary
        temp={matchTime(now, weatherData.temperature.values)}
        weather={matchTime(now, weatherData.weather.values)}
        skyCover={matchTime(now, weatherData.skyCover.values)}
        time={now}
      />
    );
    for (let i = 1; i < 6; i++) {
      const updatedTime = updateTime(i);
      cards.push(
        <WeatherCard
          temp={matchTime(updatedTime, weatherData.temperature.values)}
          weather={matchTime(updatedTime, weatherData.weather.values)}
          skyCover={matchTime(updatedTime, weatherData.skyCover.values)}
          time={updatedTime}
        />
      );
    }
    return cards;
  };

  return (
    <div className="weather-panel">{Object.keys(weatherData).length && renderWeatherCards()}</div>
  );
};

export default WeatherPanel;
