import React, { useContext } from "react";

import { LocationContext } from "../../utils/location-context";

const LocationCard = ({ location }) => {
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);

  return (
    <div
      className={`location-card${location.id === currentLocation.id ? " active" : ""}`}
      onClick={() => setCurrentLocation(location)}
    >
      <span className="city">{location.name}</span>,{" "}
      <span className="region">{location.region}</span>
      {", "}
      <span className="country">{location.country}</span>
    </div>
  );
};

export default LocationCard;
