import React from "react";
import { render, screen } from "@testing-library/react";
import ResultPage from "./ResultsPage";

describe("ResultPage", () => {
  it("renders ResultPage", () => {
    render(<ResultPage />);
    const heading = screen.getByText("Restaurants");

    expect(heading).toBeInTheDocument();
  });
});

