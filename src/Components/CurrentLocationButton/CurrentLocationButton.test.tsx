import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentLocationButton from "./CurrentLocationButton";
import { LocationContext } from "../../Helpers/Contexts/LocationContext";
import userEvent from "@testing-library/user-event";

describe("Use current location button", () => {
  it("should render location button", () => {
    render(
      <LocationContext.Provider value={"test"}>
        <CurrentLocationButton />
      </LocationContext.Provider>
    );
    const buttonText = screen.getByText("Use current location");
    expect(buttonText).toBeInTheDocument();
  });

  it("should display correct button text when userLocation added", () => {
    const userLocation = { lat: 1, lng: 1 };
    const setUserLocation = jest.fn();
    render(
      <LocationContext.Provider value={{ userLocation, setUserLocation }}>
        <CurrentLocationButton />
      </LocationContext.Provider>
    );
    const buttonText = screen.getByText("Using your location");
    expect(buttonText).toBeInTheDocument();
  });
});

