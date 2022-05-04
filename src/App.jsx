// import logo from './logo.svg';
import "./styles/main.scss";

import React, { useState, useEffect } from "react";

import { dummyData, locationURLs } from "./utils/constants";
import { LocationContext } from "./utils/location-context";
import locationApiService from "./utils/locationApiService";

import LocationsPanel from "./components/locationSelector/locationsPanel";

function App() {
  const [locationData, setLocationData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    // locationApiService.GET(locationURLs("US", "Rich").CITIES, (response) =>
    //   setLocationData(response.data)
    // );
    // setCurrentLocation(dummyData.data[0]);
  }, []);

  return (
    <LocationContext.Provider
      value={{ currentLocation, setCurrentLocation, locationData, setLocationData }}
    >
      <LocationsPanel locationData={locationData} />
    </LocationContext.Provider>
  );
}

export default App;
