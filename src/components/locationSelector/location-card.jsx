import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { locationConstants } from "../../constants/location.constants";

import FavoriteIcon from "./favorite-icon";

const LocationCard = ({ location }) => {
  const currentLocation = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const setCurrentLocation = () => dispatch({ type: locationConstants.SET_LOCATION, location });

  return (
    <div
      className={`location-card d-flex justify-space-between${
        location.id === currentLocation.id ? " active" : ""
      }`}
    >
      <div className="info" onClick={() => setCurrentLocation()}>
        <span className="city">{location.name}</span>,{" "}
        <span className="region">{location.region}</span>
        {", "}
        <span className="country">{location.country}</span>
      </div>
      <div className="star">
        <FavoriteIcon location={location} />
      </div>
    </div>
  );
};

export default LocationCard;
