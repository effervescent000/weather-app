import React from "react";

const WeatherCard = ({ temp, primary }) => {
  return (
    <div className={`weather-card${primary ? " primary" : ""}`}>
      {temp && (temp.value * 9) / 5 + 32}
    </div>
  );
};

export default WeatherCard;
