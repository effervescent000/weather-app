import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { weatherConstants } from "../../constants/weather.constants";
import { weatherURLs } from "../../utils/constants";
import weatherApiService from "../../utils/weatherApiService";
import WeatherCard from "./weather-card";

const WeatherPanel = (props) => {
  // const { currentLocation } = useContext(LocationContext);
  const currentLocation = useSelector((state) => state.location);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const setWeather = (data) => dispatch({ type: weatherConstants.SET_WEATHER, weather: data });

  const [gridData, setGridData] = useState({});
  // const [weatherData, setWeatherData] = useState({});
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
        (response) => setWeather(response.data.properties)
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
      return updatedTime;
    };
    cards.push(
      <WeatherCard
        primary
        temp={matchTime(now, weather.temperature.values)}
        weather={matchTime(now, weather.weather.values)}
        skyCover={matchTime(now, weather.skyCover.values)}
        time={now}
      />
    );
    for (let i = 1; i < 6; i++) {
      const updatedTime = updateTime(i);
      cards.push(
        <WeatherCard
          temp={matchTime(updatedTime, weather.temperature.values)}
          weather={matchTime(updatedTime, weather.weather.values)}
          skyCover={matchTime(updatedTime, weather.skyCover.values)}
          time={updatedTime}
        />
      );
    }
    return cards;
  };

  return (
    <div className="weather-panel">
      {Object.keys(weather.temperature).length && renderWeatherCards()}
    </div>
  );
};

export default WeatherPanel;
