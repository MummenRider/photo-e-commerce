import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../../Pages/Home/home";

test("should render home component", () => {
  render(<Home />);

  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
