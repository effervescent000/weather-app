import React, { useState } from "react";
import { useDispatch } from "react-redux";

import locationApiService from "../../utils/locationApiService";
import { locationURLs } from "../../constants/constants";
import { locationDataConstants } from "../../constants/locationData.constants";

const LocationInput = () => {
  const dispatch = useDispatch();
  const setLocationData = (data) =>
    dispatch({ type: locationDataConstants.SET_LOCATION_DATA, locationData: data });
  const [locationInput, setLocationInput] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "location-input") {
      setLocationInput(event.target.value);
      locationApiService.GET(locationURLs("US", event.target.value).CITIES, (response) =>
        setLocationData(response.data.data)
      );
    }
  };

  return (
    <input
      type="text"
      placeholder="Start typing your location"
      value={locationInput}
      onChange={handleChange}
      name="location-input"
    />
  );
};

export default LocationInput;
