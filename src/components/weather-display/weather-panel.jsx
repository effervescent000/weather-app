import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { weatherConstants } from "../../constants/weather.constants";
import { weatherURLs } from "../../constants/constants";
import weatherApiService from "../../utils/weatherApiService";
import WeatherCard from "./weather-card";
import { matchWeatherToTime } from "../../utils/utils";

const WeatherPanel = () => {
  const currentLocation = useSelector((state) => state.location);
  const weather = useSelector((state) => state.weather);
  const [weatherCards, setWeatherCards] = useState([]);
  const dispatch = useDispatch();

  const [gridData, setGridData] = useState({});

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
    const setWeather = (data) => dispatch({ type: weatherConstants.SET_WEATHER, weather: data });

    if (Object.keys(gridData).length > 0) {
      weatherApiService.GET(
        weatherURLs({ office: gridData.office, gridX: gridData.gridX, gridY: gridData.gridY })
          .FORECAST,
        (response) => setWeather(response.data.properties)
      );
    }
  }, [gridData, dispatch]);

  useEffect(() => {
    const now = new Date();

    const renderWeatherCards = () => {
      const cards = [];
      const updateTime = (i) => {
        const updatedTime = new Date(now);
        updatedTime.setHours(updatedTime.getHours() + i);
        return updatedTime;
      };
      cards.push(
        <WeatherCard
          primary
          key={0}
          temp={matchWeatherToTime(now, weather.temperature.values)}
          weather={matchWeatherToTime(now, weather.weather.values)}
          skyCover={matchWeatherToTime(now, weather.skyCover.values)}
          time={now}
        />
      );
      for (let i = 1; i < 6; i++) {
        const updatedTime = updateTime(i);
        cards.push(
          <WeatherCard
            key={i}
            temp={matchWeatherToTime(updatedTime, weather.temperature.values)}
            weather={matchWeatherToTime(updatedTime, weather.weather.values)}
            skyCover={matchWeatherToTime(updatedTime, weather.skyCover.values)}
            time={updatedTime}
          />
        );
      }
      return cards;
    };

    if (Object.keys(weather.temperature).length) {
      setWeatherCards(renderWeatherCards());
    }
  }, [weather]);

  return <div className="weather-panel">{weatherCards}</div>;
};

export default WeatherPanel;
