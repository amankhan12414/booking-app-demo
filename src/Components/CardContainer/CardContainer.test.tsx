import React from "react";
import { render, screen } from "@testing-library/react";
import CardContainer from "./CardContainer";
import { RestaurantsContext } from "../../Helpers/Contexts/RestaurantsContext";
import { LocationContext } from "../../Helpers/Contexts/LocationContext";

describe("CardContainer", () => {
  it("renders CardContainer and should show error text when no restaurants", () => {
    const restaurants = "";
    render(
      <RestaurantsContext.Provider value={{ restaurants }}>
        <CardContainer />
      </RestaurantsContext.Provider>
    );
    const text = screen.getByText("Unable to display, please try again later");

    expect(text).toBeInTheDocument();
  });

  it("should render Card when restaurant passed in", () => {
    const restaurants = [
      {
        averageCost: 3,
        cuizine: "Italian",
        image: {
          fields: {
            file: {
              url: "test",
            },
          },
        },
        location: "",
        name: "Pizza Shop",
        starRating: 3,
      },
    ];
    render(
      <LocationContext.Provider value={""}>
        <RestaurantsContext.Provider value={{ restaurants }}>
          <CardContainer />
        </RestaurantsContext.Provider>
      </LocationContext.Provider>
    );
    const text = screen.getByText("Pizza Shop");

    expect(text).toBeInTheDocument();
  });
});

