import React, { useState, useContext } from "react";
import { LocationContext } from "../../Contexts/LocationContext";
import { ReactComponent as LocationIcon } from "../../Assets/location.svg";

import "./current-location-button.scss";

const CurrentLocationButton = () => {
  const { userLocation, setUserLocation } = useContext(LocationContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage("Geolocation is not supported by your browser");
    } else {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setErrorMessage("");
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        () => {
          setErrorMessage("Unable to retrieve your location");
          setIsLoading(false);
        }
      );
    }
  };

  return (
    <div>
      <button
        className={`current-location-button ${isLoading && "loading"} ${
          userLocation && "complete"
        }`}
        onClick={handleGetLocation}
        disabled={isLoading || userLocation}
      >
        <LocationIcon fill="white" />
        {userLocation ? "Using your location" : "Use current location"}
      </button>
      {errorMessage && (
        <p className="current-location-error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default CurrentLocationButton;

