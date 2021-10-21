import React from "react";
import { cleanup, render } from "@testing-library/react";
import StreetPhoto from "Components/StreetPhoto/street-photo";
import img1 from "Assets/Images/stp_1.jpg";
import img2 from "Assets/Images/stp_2.jpg";
import img3 from "Assets/Images/stp_3.jpg";
import img4 from "Assets/Images/stp_4.jpg";

afterEach(cleanup);
describe("<StreetPhoto />", () => {
  it("should render <StreetPhoto /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <StreetPhoto isBigDevice={true}>
        <StreetPhoto.CenterBlock>
          <StreetPhoto.TextContainer>
            <StreetPhoto.SubTitle>
              COMMUNITY, LOVE, RESPECT
            </StreetPhoto.SubTitle>
            <StreetPhoto.Title>
              Lorem Ipsum Dolor Amet, Consetetur
            </StreetPhoto.Title>
            <StreetPhoto.SubTitle>Food Charity - Sikh</StreetPhoto.SubTitle>
          </StreetPhoto.TextContainer>
          <StreetPhoto.ImageFrameOne data-testid="img-1">
            <StreetPhoto.Image src={img1} />
          </StreetPhoto.ImageFrameOne>
          <StreetPhoto.ImageFrameTwo data-testid="img-2">
            <StreetPhoto.Image src={img2} />
          </StreetPhoto.ImageFrameTwo>
          <StreetPhoto.ImageFrameThree data-testid="img-3">
            <StreetPhoto.Image src={img3} />
          </StreetPhoto.ImageFrameThree>
          <StreetPhoto.ImageFrameFour data-testid="img-4">
            <StreetPhoto.Image src={img4} />
          </StreetPhoto.ImageFrameFour>
        </StreetPhoto.CenterBlock>
      </StreetPhoto>
    );

    expect(getByText("COMMUNITY, LOVE, RESPECT")).toBeTruthy();
    expect(getByText("Lorem Ipsum Dolor Amet, Consetetur")).toBeTruthy();
    expect(getByText("Food Charity - Sikh")).toBeTruthy();
    expect(getByTestId("img-1")).toBeTruthy();
    expect(getByTestId("img-2")).toBeTruthy();
    expect(getByTestId("img-3")).toBeTruthy();
    expect(getByTestId("img-4")).toBeTruthy();
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
