import { getByAltText, render } from "@testing-library/react";
import CapturedPortrait from "Components/CapturedPortrait/captured-portrait";
import { capturedImageData } from "Components/CapturedPortrait/portrait-data";
import LoadImage from "Components/ImageBlock/image-block";

describe("<CapturedPortrait />", () => {
  it("should render <CapturedPortrait /> with populated data", () => {
    const { container, getByAltText, getAllByText } = render(
      <CapturedPortrait>
        {capturedImageData.map((imageData) => (
          <CapturedPortrait.Block key={imageData.id}>
            <CapturedPortrait.Left>
              <CapturedPortrait.SubTitle>
                {imageData.topSubTitle}
              </CapturedPortrait.SubTitle>
              <CapturedPortrait.MainTitle>
                {imageData.mainTitle}
              </CapturedPortrait.MainTitle>
              <CapturedPortrait.SubTitle>
                {imageData.bottomSubTitle}
              </CapturedPortrait.SubTitle>
            </CapturedPortrait.Left>
            <CapturedPortrait.Right>
              <LoadImage
                src={imageData.src}
                fallback={imageData.fallback}
                alt={imageData.alt}
              />
            </CapturedPortrait.Right>
          </CapturedPortrait.Block>
        ))}
      </CapturedPortrait>
    );

    expect(getAllByText("LOREM, IPSUM, NONUMY")).toBeTruthy();
    expect(getAllByText("Lorem Ipsum Dolor Amet Conseteur")).toBeTruthy();
    expect(getAllByText("Stet Clita - AMOR")).toBeTruthy();
    expect(getByAltText("Chan image")).toBeTruthy();
    expect(getByAltText("Ariana image")).toBeTruthy();
    expect(getByAltText("Liz image")).toBeTruthy();
    expect(getByAltText("Bailey image")).toBeTruthy();
  });
});
