import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React from "react";

import LocationsPanel from "./components/locationSelector/locations-panel";
import WeatherPanel from "./components/weather-display/weather-panel";
import ActivitiesWrapper from "./components/activites/activities-wrapper";

function App() {
  return (
    <div className="app d-flex justify-center">
      <div className="page-wrapper">
        <div className="top-grid grid-two-cols">
          <WeatherPanel />
          <LocationsPanel />
        </div>
        <div className="bottom-grid">
          <ActivitiesWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
