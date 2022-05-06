import React, { useState, useEffect } from "react";

const WeatherCard = ({ temp, primary, weather, skyCover, time }) => {
  const [weatherConditions, setWeatherConditions] = useState({});
  const coverageMapping = {
    slight_chance: 1,
    chance: 2,
    likely: 3,
    definite: 4,
  };
  const conditionMapping = {
    rain_showers: "Rainy",
    thunderstorms: "Stormy",
    sunny: "Sunny",
    very_cloudy: "Overcast",
    cloudy: "Cloudy",
  };
  const conditionObject = {
    coverage: null,
    weather: null,
    intensity: null,
    attributes: [],
  };

  useEffect(() => {
    if (weather) {
      setWeatherConditions(getWeatherConditions());
    }
  }, [weather, skyCover, temp]);

  const getWeatherConditions = () => {
    if (weather.value[0].coverage) {
      const condition = weather.value[0];
      if (coverageMapping[condition.coverage] > 2) {
        return condition;
      }
    }
    if (skyCover.value >= 95) {
      return { ...conditionObject, weather: "very_cloudy" };
    }
    if (skyCover.value >= 60) {
      return { ...conditionObject, weather: "cloudy" };
    }
    return { ...conditionObject, weather: "sunny" };
  };

  return (
    <div
      className={`weather-card d-flex justify-space-between align-items-center${
        primary ? " primary" : ""
      }`}
    >
      <div className="time">
        <span className="date">{`${time.getMonth() + 1}/${time.getDate()}/${time.getYear()}`}</span>{" "}
        <span className="time">{`${time.getHours()}:${time.getMinutes()}`}</span>
      </div>
      <div className="weather-conditions">
        {Object.keys(weatherConditions).length && conditionMapping[weatherConditions.weather]}
      </div>
      <div className="temp">{temp && `${(temp.value * 9) / 5 + 32}°F`}</div>
    </div>
  );
};

export default WeatherCard;
