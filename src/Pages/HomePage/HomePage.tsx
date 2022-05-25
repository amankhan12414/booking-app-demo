import React from "react";
import CurrentLocationButton from "../../Components/CurrentLocationButton/CurrentLocationButton";

import "./home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Hungry?</h1>
      <h2>Book a restaurant near you</h2>
      <CurrentLocationButton />
    </div>
  );
};

export default HomePage;

