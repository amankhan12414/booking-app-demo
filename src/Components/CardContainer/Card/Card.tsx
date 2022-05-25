import React, { ReactElement, useContext, useState } from "react";
import { LocationContext } from "../../../Helpers/Contexts/LocationContext";
import { IRestaurant } from "../../../Pages/ResultsPage/RestaurantInterface";
import { getDistance } from "geolib";

import "./card.scss";
import BookingModal from "../../BookingModal/BookingModal";

type Props = {
  restaurant: IRestaurant;
};

const Card = ({
  restaurant: { averageCost, cuizine, image, location, name, starRating },
}: Props) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const { userLocation } = useContext(LocationContext);

  const getUserDistance = () => {
    const locationDataAsFloats = {
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lon),
    };
    const distanceInMiles =
      getDistance(locationDataAsFloats, {
        latitude: userLocation.lat,
        longitude: userLocation.lng,
      }) * 0.000621371192;
    return distanceInMiles.toFixed(2);
  };

  const iconMultiplier = (icon: string, multiplier: number): ReactElement => {
    return (
      <div>
        {[...Array(multiplier)].map((index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    );
  };

  const handleModalClose = () => {
    setIsBookingModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="card-container">
      <img src={image.fields.file.url} alt="Restaurant Logo" />
      <div className="card-content">
        <h4>{name}</h4>
        {iconMultiplier("★", starRating)}
        <p>{cuizine}</p>
        <p>
          Distance:{" "}
          {userLocation ? (
            <span>{`${getUserDistance()} miles`}</span>
          ) : (
            "Location required"
          )}
        </p>
        {iconMultiplier("£", averageCost)}
      </div>
      <button onClick={() => setIsBookingModalOpen(!isBookingModalOpen)}>
        More details
      </button>

      {isBookingModalOpen && (
        <BookingModal handleCloseModal={handleModalClose} />
      )}
    </div>
  );
};

export default Card;

