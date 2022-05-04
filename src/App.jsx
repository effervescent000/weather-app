// import logo from './logo.svg';
import "./styles/main.scss";

import React, { useState, useEffect } from "react";

import { dummyData } from "./utils/constants";
import { LocationContext } from "./utils/location-context";

import LocationPanel from "./components/locationSelector/locationsPanel";

function App() {
  const [locationData, setLocationData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    setLocationData(dummyData);
    setCurrentLocation(dummyData.data[0]);
  }, []);

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      <LocationPanel locationData={locationData} />
    </LocationContext.Provider>
  );
}

export default App;
