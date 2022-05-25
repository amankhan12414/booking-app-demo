import React, { SetStateAction, useEffect } from "react";

import "./booking-modal.scss";

type Props = {
  handleCloseModal: () => void;
};

const BookingModal = (props: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <div className="booking-modal-container" onClick={props.handleCloseModal}>
      <div className="map-container">map</div>
      <div className="content-container">content</div>
    </div>
  );
};

export default BookingModal;

