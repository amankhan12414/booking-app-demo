import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { LocationContext } from "../../../Helpers/Contexts/LocationContext";
import userEvent from "@testing-library/user-event";

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

describe("Card", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders Card", () => {
    render(
      <LocationContext.Provider value={""}>
        <Card restaurant={restaurants[0]} />
      </LocationContext.Provider>
    );
    const restaurantName = screen.getByText("Pizza Shop");
    const restaurantCuizine = screen.getByText("Italian");

    expect(restaurantName).toBeInTheDocument();
    expect(restaurantCuizine).toBeInTheDocument();
  });

  it("should set the modal to be closed on load", () => {
    const userLocation = { lat: 1, lng: 1 };
    render(
      <LocationContext.Provider value={{ userLocation }}>
        <Card restaurant={restaurants[0]} />
      </LocationContext.Provider>
    );
    const modalText = screen.queryByText("Complete form correctly");

    expect(modalText).not.toBeInTheDocument();
  });

  it("sets modal to open when button clicked", () => {
    const userLocation = { lat: 1, lng: 1 };

    render(
      <LocationContext.Provider value={{ userLocation }}>
        <Card restaurant={restaurants[0]} />
      </LocationContext.Provider>
    );
    const button = screen.getByText("More details");
    userEvent.click(button);

    const modalText = screen.getByText("Complete form correctly");
    expect(modalText).toBeInTheDocument();
  });
});

