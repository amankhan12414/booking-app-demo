import React, { useEffect } from "react";
import { elementMultiplier } from "../../Helpers/Utils/elementMultiplier";
import { IRestaurant } from "../../Pages/ResultsPage/RestaurantInterface";
import BookingForm from "../BookingForm/BookingForm";
import Map from "../Map/Map";

import "./booking-modal.scss";

type Props = {
  handleCloseModal: () => void;
  restaurant: IRestaurant;
};

const BookingModal = ({
  restaurant: { averageCost, cuizine, location, name, starRating },
  handleCloseModal,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <div className="booking-modal-container">
      <Map restaurantLocation={location} />
      <div className="content-container">
        <h3>{name}</h3>
        <p>
          Cuisine: <strong>{cuizine}</strong>{" "}
        </p>
        <p>Rating: {elementMultiplier("★", starRating)}</p>
        <p>Average cost: {elementMultiplier("£", averageCost)}</p>
        <BookingForm restaurantName={name} />
        <button onClick={handleCloseModal}>Back</button>
      </div>
    </div>
  );
};

export default BookingModal;

