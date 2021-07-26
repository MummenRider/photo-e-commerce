import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroSection from "Components/Hero/hero";
import AboutComponent from "Components/About/about";
import "react-intersection-observer/test-utils";

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

describe("about component", () => {
  it("should have a header ", () => {
    render(<AboutComponent />);
    expect(screen.getAllByText(/Who am I/i)[0]).toBeInTheDocument();
  });
});
