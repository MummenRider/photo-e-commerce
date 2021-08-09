import React from "react";
import { render } from "@testing-library/react";
import "react-intersection-observer/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "Pages/Home/home";

describe("<Home />", () => {
  if (!SVGElement.prototype.getTotalLength) {
    SVGElement.prototype.getTotalLength = () => 1;
  }

  it("should render <Home />", () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Home isBigDevice={true} />
      </Router>
    );

    expect(getByText("I do not capture images,")).toBeTruthy();
    expect(getByText("I capture memories")).toBeTruthy();
    expect(getByText("My Creations")).toBeTruthy();
    expect(getByText("LOREM IPSUM DOTTOR ANET")).toBeTruthy();
    expect(getByText("Captured Portraits")).toBeTruthy();
    expect(getByAltText("flower")).toBeTruthy();
  });
});
