import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { LocationContext } from "../../Helpers/Contexts/LocationContext";

describe("HomePage", () => {
  it("renders HomePage", () => {
    render(
      <LocationContext.Provider value={"test"}>
        <HomePage />
      </LocationContext.Provider>
    );
    const heading = screen.getByText("Hungry?");
    const subHeading = screen.getByText("Book a restaurant near you");

    expect(subHeading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});

