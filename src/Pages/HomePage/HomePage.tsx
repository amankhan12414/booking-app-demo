import React from "react";
import CurrentLocationButton from "../../Components/CurrentLocationButton/CurrentLocationButton";

import "./home-page.scss";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="home-page-container">
      <h1>Hungry?</h1>
      <h2>Book a restaurant near you</h2>
      <CurrentLocationButton />
      <button>Show me everything</button>
    </div>
  );
};

export default HomePage;

