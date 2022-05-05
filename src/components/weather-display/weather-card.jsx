import React, { useState, useEffect } from "react";

const WeatherCard = ({ temp, primary, weather }) => {
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
  };

  useEffect(() => {
    if (weather) {
      setWeatherConditions(getWeatherConditions());
    }
  }, [weather]);

  const getWeatherConditions = () => {
    if (weather.value[0].coverage) {
      const condition = weather.value[0];
      if (coverageMapping[condition.coverage] > 2) {
        return condition;
      }
    }
    return {
      coverage: null,
      weather: "sunny",
      intensity: null,
    };
  };

  return (
    <div className={`weather-card d-flex justify-end${primary ? " primary" : ""}`}>
      <div className="weather-conditions">
        {Object.keys(weatherConditions).length && conditionMapping[weatherConditions.weather]}
      </div>
      <div className="temp">{temp && `${(temp.value * 9) / 5 + 32}°F`}</div>
    </div>
  );
};

export default WeatherCard;
