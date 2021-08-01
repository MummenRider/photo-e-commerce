import React from "react";
import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";
import "react-intersection-observer/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../home";

it("should render <Home />", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect(screen.getByText("Photography is")).toBeTruthy();
  expect(screen.getByText("the story I fail to")).toBeTruthy();
  expect(screen.getByText("put into words")).toBeTruthy();
  expect(screen.getAllByText("Who am I")).toBeTruthy();
});
