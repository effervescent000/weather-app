import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

import { locationConstants } from "../../constants/location.constants";

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
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    </div>
  );
};

export default LocationCard;
