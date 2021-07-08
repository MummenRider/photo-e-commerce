import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroSection from "Components/Hero/hero";

afterEach(cleanup);

describe("hero component in home page", () => {
  beforeEach(() => render(<HeroSection />));

  it("should have an image ", () => {
    expect(screen.getByAltText(/image-background/i)).toBeInTheDocument();
  });

  it("should have a header photography", () => {
    expect(screen.getByText(/photography/i)).toBeInTheDocument();
  });

  it("should have explore line ", () => {
    expect(screen.getByTestId("explore-line")).toBeInTheDocument();
  });
});
