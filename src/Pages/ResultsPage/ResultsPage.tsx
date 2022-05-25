import React, { useEffect, useMemo, useState } from "react";
import { RestaurantsContext } from "../../Helpers/Contexts/RestaurantsContext";
import CardContainer from "../../Components/CardContainer/CardContainer";
import useContentful from "../../Helpers/Hooks/useContentful";
import { IRestaurant } from "./RestaurantInterface";

import "./results-page.scss";

const ResultsPage = () => {
  const { getRestaurants } = useContentful();

  const [restaurants, setRestaurants] = useState<IRestaurant[] | undefined>([]);

  useEffect(() => {
    getRestaurants().then(
      (response: React.SetStateAction<IRestaurant[] | undefined>) =>
        setRestaurants(response)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRestaurants]);

  const restaurantProviderValues = useMemo(
    () => ({ restaurants, setRestaurants }),
    [restaurants, setRestaurants]
  );

  console.log(restaurants);

  return (
    <div className="results-page-container">
      <RestaurantsContext.Provider value={restaurantProviderValues}>
        <h2>Restaurants</h2>
        <CardContainer />
      </RestaurantsContext.Provider>
    </div>
  );
};

export default ResultsPage;

