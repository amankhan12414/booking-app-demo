import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./map.scss";

type Props = {
  restaurantLocation: any;
};

const Map = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_ACCESS_TOKEN as string,
  });

  const center: any = useMemo(() => ({ lat: 53.8047, lng: -1.77691 }), []);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="google-maps-container"
      clickableIcons={false}
    >
      <Marker visible={true} position={center} />
    </GoogleMap>
  );
};

export default Map;

