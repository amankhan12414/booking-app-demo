import React, { useContext, useState } from "react";
import { LocationContext } from "../../../Helpers/Contexts/LocationContext";
import { IRestaurant } from "../../../Pages/ResultsPage/RestaurantInterface";
import { getDistance } from "geolib";

import "./card.scss";
import BookingModal from "../../BookingModal/BookingModal";
import { elementMultiplier } from "../../../Helpers/Utils/elementMultiplier";

type Props = {
  restaurant: IRestaurant;
};

const Card = ({
  restaurant: { averageCost, cuizine, image, location, name, starRating },
}: Props) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const { userLocation } = useContext(LocationContext);

  const restaurantLocationAsFloats = {
    lat: parseFloat(location.lat),
    lng: parseFloat(location.lon),
  };
  const getUserDistance = (): number => {
    const distanceInMiles =
      getDistance(restaurantLocationAsFloats, {
        latitude: userLocation.lat,
        longitude: userLocation.lng,
      }) * 0.000621371192;
    return parseFloat(distanceInMiles.toFixed(2));
  };

  return (
    <div className="card-container">
      <img
        className="main-image"
        src={image.fields.file.url}
        alt="Restaurant Logo"
      />
      <div className="card-content">
        <h4>{name}</h4>
        {elementMultiplier("★", starRating)}
        <p>{cuizine}</p>
        <p>
          Distance:{" "}
          {userLocation ? (
            <span>{`${getUserDistance()} miles`}</span>
          ) : (
            "Location required"
          )}
        </p>
        {elementMultiplier("£", averageCost)}
      </div>
      <button onClick={() => setIsBookingModalOpen(true)}>More details</button>

      {isBookingModalOpen && (
        <BookingModal
          setIsBookingModalOpen={setIsBookingModalOpen}
          restaurant={{
            averageCost,
            cuizine,
            image,
            location: restaurantLocationAsFloats,
            name,
            starRating,
          }}
        />
      )}
    </div>
  );
};

export default Card;

