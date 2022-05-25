import React from "react";
import { render, screen } from "@testing-library/react";
import BookingModal from "./BookingModal";
import { LocationContext } from "../../Helpers/Contexts/LocationContext";
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

const setIsBookingModalOpen = jest.fn();

const userLocation = { lat: 1, lng: 1 };

describe("BookingModal", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal", () => {
    render(
      <LocationContext.Provider value={{ userLocation }}>
        <BookingModal
          restaurant={restaurants[0]}
          setIsBookingModalOpen={setIsBookingModalOpen}
        />
      </LocationContext.Provider>
    );
    const restaurantName = screen.getByText("Pizza Shop");
    const restaurantCuizine = screen.getByText("Italian");

    expect(restaurantName).toBeInTheDocument();
    expect(restaurantCuizine).toBeInTheDocument();
  });

  it("should close modal on button press", () => {
    render(
      <LocationContext.Provider value={{ userLocation }}>
        <BookingModal
          restaurant={restaurants[0]}
          setIsBookingModalOpen={setIsBookingModalOpen}
        />
      </LocationContext.Provider>
    );
    const closeButton = screen.getByText("Back");
    userEvent.click(closeButton);

    expect(setIsBookingModalOpen).toBeCalled();
  });
});

