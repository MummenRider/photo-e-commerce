import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroSection from "Components/Hero/hero";

afterEach(cleanup);

describe("hero component in home page", () => {
  test("successfully rendered", () => {
    render(<HeroSection />);
    expect(screen.getByTestId("hero-container")).toBeInTheDocument();
  });
});
