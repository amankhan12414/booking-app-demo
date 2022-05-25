import React, { ReactElement } from "react";
import { IRestaurant } from "../../../Pages/ResultsPage/RestaurantInterface";

import "./card.scss";

type Props = {
  restaurant: IRestaurant;
};

const Card = ({
  restaurant: { averageCost, cuizine, image, location, name, starRating },
}: Props) => {
  const iconMultiplier = (icon: string, multiplier: number): ReactElement => {
    return (
      <div>
        {[...Array(multiplier)].map((index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="card-container">
      <img src={image.fields.file.url} alt="Restaurant Logo" />
      <div className="card-content">
        <h4>{name}</h4>
        {iconMultiplier("★", starRating)}
        <p>{cuizine}</p>
        <p>Distance: 3.24miles</p>
        {iconMultiplier("£", averageCost)}
      </div>
      <button>More details</button>
    </div>
  );
};

export default Card;

