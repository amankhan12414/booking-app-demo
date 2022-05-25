import React, { useContext } from "react";
import Card from "./Card/Card";
import { RestaurantsContext } from "../../Helpers/Contexts/RestaurantsContext";

import "./card-container.scss";
import { IRestaurant } from "../../Pages/ResultsPage/RestaurantInterface";

type Props = {};

const CardContainer = (props: Props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  return (
    <div className="card-container-container">
      {restaurants ? (
        restaurants.map((restaurant: IRestaurant) => (
          <Card restaurant={restaurant} />
        ))
      ) : (
        <p>Unable to display, please try again later</p>
      )}
    </div>
  );
};

export default CardContainer;

