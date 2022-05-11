// import logo from './logo.svg';
import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React, { useState } from "react";

import { LocationContext } from "./utils/location-context";

import LocationsPanel from "./components/locationSelector/locationsPanel";
import WeatherPanel from "./components/weather-display/weather-panel";
import ActivitiesWrapper from "./components/activites/activities-wrapper";

function App() {
  const [locationData, setLocationData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});

  return (
    <LocationContext.Provider
      value={{ currentLocation, setCurrentLocation, locationData, setLocationData }}
    >
      <div className="app d-flex justify-center">
        <div className="page-wrapper">
          <div className="top-grid d-flex">
            <WeatherPanel />
            <LocationsPanel locationData={locationData} />
          </div>
          <div className="bottom-grid">
            <ActivitiesWrapper />
          </div>
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
