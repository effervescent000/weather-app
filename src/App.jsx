import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import jsCookie from "js-cookie";

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import { favoritesConstants } from "./constants/favorites.constants";

import LocationsPanel from "./components/locationSelector/locations-panel";
import WeatherPanel from "./components/weather-display/weather-panel";
import ActivitiesWrapper from "./components/activites/activities-wrapper";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favorites = jsCookie.get("favoriteLocations");
    if (favorites) {
      dispatch({ type: favoritesConstants.SET_FAVORITES, favorites: JSON.parse(favorites) });
    }
  }, []);

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
