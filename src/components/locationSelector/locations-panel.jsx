import React from "react";
import { useSelector } from "react-redux";

import LocationCard from "./location-card";
import LocationInput from "./location-input";

const LocationPanel = () => {
  const locationData = useSelector((state) => state.locationData);
  const favoriteLocations = useSelector((state) => state.favorites);
  return (
    <div className="locations-panel">
      <LocationInput />
      {favoriteLocations &&
        favoriteLocations.map((loc) => <LocationCard key={`f-${loc.id}`} location={loc} />)}
      {locationData && locationData.map((loc) => <LocationCard key={loc.id} location={loc} />)}
    </div>
  );
};

export default LocationPanel;
