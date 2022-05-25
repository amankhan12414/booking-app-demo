/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders app", () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.getElementsByClassName("scroll-snap-wrapper").length).toBe(
      1
    );
  });
});

