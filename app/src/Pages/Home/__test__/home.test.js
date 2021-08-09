import React from "react";
import { render, screen } from "@testing-library/react";
import "react-intersection-observer/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../home";
import { StreetPhotoContainer } from "Containers/street-photo-container";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<Home />", () => {
  if (!SVGElement.prototype.getTotalLength) {
    SVGElement.prototype.getTotalLength = () => 1;
  }

  it("should render <Home />", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText("I do not capture images,")).toBeTruthy();
    expect(screen.getByText("I capture memories")).toBeTruthy();
    expect(screen.getByText("My Creations")).toBeTruthy();
  });
});
