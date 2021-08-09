import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import About from "Components/about/about";
import nicoImg from "Assets/Images/mobile-abt-nico@3x.png";

afterEach(cleanup);
describe("<About />", () => {
  it("should render <About />", () => {
    const { container, getByText, queryByText } = render(
      <About>
        <About.Title isBigDevice={true}>Title here</About.Title>
        <About.Image src={nicoImg} />
        <About.Description>Some description</About.Description>
      </About>
    );

    expect(queryByText("Title here")).toBeTruthy();
    expect(getByText("Some description")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render <About /> with title hidden to user", () => {
    const { container, queryByText } = render(
      <About>
        <About.Title isBigDevice={false}>Title here</About.Title>
      </About>
    );

    expect(queryByText("Title here")).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
