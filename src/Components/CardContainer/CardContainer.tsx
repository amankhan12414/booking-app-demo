import React from "react";
import Card from "./Card/Card";

import "./card-container.scss";

type Props = {};

const CardContainer = (props: Props) => {
  return (
    <div className="card-container-container">
      <Card />
    </div>
  );
};

export default CardContainer;

