import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../Assets/location.svg";

import "./current-location-button.scss";

type Props = {};

const CurrentLocationButton = (props: Props) => {
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
          console.log("lat ", position.coords.latitude);
          console.log("lng ", position.coords.longitude);
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
        className={`current-location-button ${isLoading && "loading"}`}
        onClick={handleGetLocation}
        disabled={isLoading}
      >
        <LocationIcon fill="white" />
        Use current location
      </button>
      {errorMessage && (
        <p className="current-location-error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default CurrentLocationButton;

