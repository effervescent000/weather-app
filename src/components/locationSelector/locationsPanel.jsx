import React from "react";

import LocationCard from "./location-card";
import LocationInput from "./location-input";

const LocationPanel = ({ locationData }) => {
  return (
    <div className="locations-panel">
      <LocationInput />
      {locationData.data &&
        locationData.data.map((loc) => <LocationCard key={loc.id} location={loc} />)}
    </div>
  );
};

export default LocationPanel;
