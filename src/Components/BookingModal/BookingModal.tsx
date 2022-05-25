import React from "react";
import { elementMultiplier } from "../../Helpers/Utils/elementMultiplier";
import { IRestaurant } from "../../Pages/ResultsPage/RestaurantInterface";
import BookingForm from "../BookingForm/BookingForm";
import Map from "../Map/Map";

import "./booking-modal.scss";

type Props = {
  setIsBookingModalOpen: (value: boolean) => void;
  restaurant: IRestaurant;
};

const BookingModal = ({
  restaurant: { averageCost, cuizine, location, name, starRating },
  setIsBookingModalOpen,
}: Props) => {
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
        <button onClick={() => setIsBookingModalOpen(false)}>Back</button>
      </div>
    </div>
  );
};

export default BookingModal;

