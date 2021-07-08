import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroSection from "Components/Hero/hero.js";

afterEach(cleanup);

test("should render hero component", () => {
  render(<HeroSection />);

  expect(screen.getByAltText(/image-background/i)).toBeInTheDocument();
  expect(screen.getByText(/photography/i)).toBeInTheDocument();
  expect(screen.getByTestId("explore-line")).toBeInTheDocument();
});
