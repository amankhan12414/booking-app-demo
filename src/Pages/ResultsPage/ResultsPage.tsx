import React from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";

import "./results-page.scss";

type Props = {
  location?: number[];
};

const ResultsPage = ({ location }: Props) => {
  return (
    <div className="results-page-container">
      <h2>{location ? "Restaurants near you" : "All restaurants"}</h2>
      <CardContainer />
    </div>
  );
};

export default ResultsPage;

