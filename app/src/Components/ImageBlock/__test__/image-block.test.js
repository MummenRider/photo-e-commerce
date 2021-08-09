import React from "react";
import { render } from "@testing-library/react";
import LoadImage from "../image-block";

describe("<ImageBlock />", () => {
  it("should render <ImageBlock /> with the passed data", () => {
    const { container, getByAltText } = render(
      <LoadImage
        src={require("Assets/Images/stp_1.jpg").default}
        fallback={require("Assets/Images/stp_1.webp").default}
        alt={"Some kind of picture"}
      />
    );

    expect(getByAltText("Some kind of picture")).toBeTruthy();
  });
});
