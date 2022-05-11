import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { locationConstants } from "../../constants/location.constants";

const LocationCard = ({ location }) => {
  const currentLocation = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const setCurrentLocation = () => dispatch({ type: locationConstants.SET_LOCATION, location });

  return (
    <div
      className={`location-card${location.id === currentLocation.id ? " active" : ""}`}
      onClick={() => setCurrentLocation()}
    >
      <span className="city">{location.name}</span>,{" "}
      <span className="region">{location.region}</span>
      {", "}
      <span className="country">{location.country}</span>
    </div>
  );
};

export default LocationCard;
