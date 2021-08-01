import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import About from "Components/about/about";
import nicoImg from "Assets/Images/mobile-abt-nico@3x.png";

it("should render <About />", () => {
  const { container, getByText } = render(
    <About>
      <About.Title>Title here</About.Title>
      <About.Image src={nicoImg} />
      <About.Description>Some description</About.Description>
    </About>
  );

  expect(getByText("Title here")).toBeTruthy();
  expect(getByText("Some description")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
