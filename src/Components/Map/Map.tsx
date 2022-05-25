import React, { useContext, useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { LocationContext } from "../../Helpers/Contexts/LocationContext";

import "./map.scss";

type Props = {
  restaurantLocation?: any;
};

const Map = ({ restaurantLocation }: Props) => {
  const [markerTimeout, setMarkerTimeout] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_ACCESS_TOKEN as string,
  });

  const { userLocation } = useContext(LocationContext);

  const restaurantMarker = {
    position: { lat: restaurantLocation.lat, lng: restaurantLocation.lng },
    label: "Restaurant",
  };

  const userMarker = {
    position: { lat: userLocation.lat, lng: userLocation.lng },
    label: "My location",
  };

  //bug with markers, render with with a timeout
  setTimeout(() => {
    setMarkerTimeout(true);
  }, 500);

  if (!isLoaded) {
    return (
      <div className="google-maps-loading">
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={12}
      center={{ lat: restaurantLocation.lat, lng: restaurantLocation.lng }}
      mapContainerClassName="google-maps-container"
      clickableIcons={false}
    >
      {markerTimeout && (
        <React.Fragment>
          {restaurantLocation && <Marker {...restaurantMarker} />}
          {userLocation && <Marker {...userMarker} />}
        </React.Fragment>
      )}
    </GoogleMap>
  );
};

export default Map;

