import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "Components/Hero/hero.js";
import heroImg from "Assets/Images/hero-bg@2x.png";

it("should render hero component", () => {
  const { container, getByText } = render(
    <Hero>
      <Hero.ImageFrame>
        <Hero.Image src={heroImg} alt="image-background" />
      </Hero.ImageFrame>
      <Hero.TextContainer>
        <Hero.Text>Hero section</Hero.Text>
      </Hero.TextContainer>
    </Hero>
  );

  expect(screen.getByAltText("image-background")).toBeTruthy();
  expect(getByText("Hero section")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
