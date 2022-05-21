import React from "react";
import { useSelector } from "react-redux";

import LocationCard from "./location-card";
import LocationInput from "./location-input";

const LocationPanel = () => {
  const locationData = useSelector((state) => state.locationData);
  return (
    <div className="locations-panel">
      <LocationInput />
      {locationData && locationData.map((loc) => <LocationCard key={loc.id} location={loc} />)}
    </div>
  );
};

export default LocationPanel;
