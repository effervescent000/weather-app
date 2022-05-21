import React, { useState, useContext } from "react";

import locationApiService from "../../utils/locationApiService";
import { locationURLs } from "../../constants/constants";
import { LocationContext } from "../../utils/location-context";

const LocationInput = (props) => {
  const { setLocationData } = useContext(LocationContext);
  const [locationInput, setLocationInput] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "location-input") {
      setLocationInput(event.target.value);
      locationApiService.GET(locationURLs("US", locationInput).CITIES, (response) =>
        setLocationData(response.data)
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
