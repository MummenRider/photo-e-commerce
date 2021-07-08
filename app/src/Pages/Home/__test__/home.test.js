import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import HeroSection from "Components/Hero/hero";

test("should render hero component", () => {
  render(<HeroSection />);

  expect(screen.getByAltText(/image-background/i)).toBeInTheDocument();
  expect(screen.getByText(/photography/i)).toBeInTheDocument();
  expect(screen.getByTestId("explore-line")).toBeInTheDocument();
});
