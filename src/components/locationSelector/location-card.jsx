import React, { useContext } from "react";

import { LocationContext } from "../../utils/location-context";

const LocationCard = ({ id, city, region, country, latitude, longitude }) => {
  const { currentLocation } = useContext(LocationContext);

  return (
    <div className={`location-card${id === currentLocation.id ? " active" : ""}`}>
      <span className="city">{city}</span> <span className="region">{region}</span>{" "}
      <span className="country">{country}</span>
    </div>
  );
};

export default LocationCard;
