// import logo from './logo.svg';
import "./styles/main.scss";

import React, { useState, useEffect } from "react";

import { LocationContext } from "./utils/location-context";

import LocationsPanel from "./components/locationSelector/locationsPanel";
import WeatherPanel from "./components/weather-display/weather-panel";

function App() {
  const [locationData, setLocationData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});

  return (
    <LocationContext.Provider
      value={{ currentLocation, setCurrentLocation, locationData, setLocationData }}
    >
      <div className="app d-flex justify-center">
        <div className="page-wrapper d-flex">
          <WeatherPanel />
          <LocationsPanel locationData={locationData} />
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
