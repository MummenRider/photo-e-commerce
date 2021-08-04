import React from "react";
import { render, screen } from "@testing-library/react";
import "react-intersection-observer/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../home";

describe("<Home />", () => {
  it("should render <Home />", () => {
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
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
