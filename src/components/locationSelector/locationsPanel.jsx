import React from "react";

import LocationCard from "./location-card";

const LocationPanel = ({ locationData }) => {
  return (
    <div className="locations-panel">
      {locationData.data &&
        locationData.data.map((loc) => <LocationCard key={loc.id} location={loc} />)}
    </div>
  );
};

export default LocationPanel;
