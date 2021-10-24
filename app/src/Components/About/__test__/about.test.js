import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import About from "Components/about/about";
import nicoImgOne from "Assets/Images/nico_bkg.jpg";
import nicoImgTwo from "Assets/Images/nico_img_2.jpg";
import "react-intersection-observer/test-utils";

afterEach(cleanup);
describe("<About />", () => {
  it("should render <About />", () => {
    const { container, getByText } = render(
      <About>
        <About.Description>Some description</About.Description>
        <About.ImageOne>
          <About.Image src={nicoImgOne} />
        </About.ImageOne>
        <About.ImageTwo options={{ threshold: 0.5 }}>
          <About.Image src={nicoImgTwo} />
        </About.ImageTwo>
      </About>
    );

    expect(getByText("Some description")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
