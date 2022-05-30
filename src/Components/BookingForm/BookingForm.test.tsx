import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";

const mockRestaurantName = "Pizza Shop";

describe("BookingForm", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders BookingForm", () => {
    render(<BookingForm restaurantName={mockRestaurantName} />);
    const formTitle = screen.getByText("Book now");

    expect(formTitle).toBeInTheDocument();
  });

  it("should validate email and remove error message", () => {
    render(<BookingForm restaurantName={mockRestaurantName} />);

    const errorMessage = screen.queryByText("Complete form correctly");
    const emailInput = screen.getByPlaceholderText("Email address");

    expect(errorMessage).toBeInTheDocument();

    userEvent.type(emailInput, "test@gmail.com");
    fireEvent.blur(emailInput);

    expect(errorMessage).not.toBeInTheDocument();
  });
});

