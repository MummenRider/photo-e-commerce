import React from "react";
import { render } from "@testing-library/react";
import StreetPhoto from "Components/StreetPhoto/street-photo";

describe("<StreetPhoto />", () => {
  it("should render <StreetPhoto /> with populated data", () => {
    const { container, getByText } = render(
      <StreetPhoto isBigDevice={true}>
        <StreetPhoto.TextContainer>
          <StreetPhoto.SubTitle>COMMUNITY, LOVE, RESPECT</StreetPhoto.SubTitle>
          <StreetPhoto.Title>
            Lorem Ipsum Dolor Amet, Consetetur
          </StreetPhoto.Title>
          <StreetPhoto.SubTitle>Food Charity - Sikh</StreetPhoto.SubTitle>
        </StreetPhoto.TextContainer>

        {/* Image blocks is simply a container and therefore should be able to handle any kind of children passed to it */}
        <StreetPhoto.ImageBlockOne>Image content one</StreetPhoto.ImageBlockOne>
        <StreetPhoto.ImageBlockTwo>Image content two</StreetPhoto.ImageBlockTwo>
        <StreetPhoto.ImageBlockThree>
          Image content three
        </StreetPhoto.ImageBlockThree>
        <StreetPhoto.ImageBlockFour>
          Image content four
        </StreetPhoto.ImageBlockFour>
      </StreetPhoto>
    );

    expect(getByText("COMMUNITY, LOVE, RESPECT")).toBeTruthy();
    expect(getByText("Lorem Ipsum Dolor Amet, Consetetur")).toBeTruthy();
    expect(getByText("Food Charity - Sikh")).toBeTruthy();
    expect(getByText("Image content one")).toBeTruthy();
    expect(getByText("Image content two")).toBeTruthy();
    expect(getByText("Image content three")).toBeTruthy();
    expect(getByText("Image content four")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render <StreetPhoto /> in smaller devices", () => {
    const { container, queryByTestId } = render(
      <StreetPhoto isBigDevice={false}>
        <StreetPhoto.SubTitle>COMMUNITY, LOVE, RESPECT</StreetPhoto.SubTitle>
      </StreetPhoto>
    );

    expect(queryByTestId("str-photo-component")).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
