import { getByAltText, render } from "@testing-library/react";
import CapturedPortrait from "Components/CapturedPortrait/captured-portrait";
import { capturedImageData } from "Components/CapturedPortrait/portrait-data";
import LoadImage from "Components/ImageBlock/image-block";
import { useInView } from "react-intersection-observer";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("<CapturedPortrait />", () => {
  it("should render <CapturedPortrait /> with populated data", () => {
    const { container, getByAltText, getAllByText } = render(
      <CapturedPortrait>
        {capturedImageData.map((imageData) => (
          <CapturedPortrait.Block key={imageData.id}>
            <CapturedPortrait.Left>
              <CapturedPortrait.TextContainer>
                <CapturedPortrait.SubTitle>
                  {imageData.topSubTitle}
                </CapturedPortrait.SubTitle>
                <CapturedPortrait.MainTitle>
                  {imageData.mainTitle}
                </CapturedPortrait.MainTitle>
                <CapturedPortrait.SubTitle>
                  {imageData.bottomSubTitle}
                </CapturedPortrait.SubTitle>
              </CapturedPortrait.TextContainer>
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
    mockAllIsIntersecting(true);

    expect(getAllByText("LOREM, IPSUM, NONUMY")).toBeTruthy();
    expect(getAllByText("Lorem Ipsum Dolor Amet Conseteur")).toBeTruthy();
    expect(getAllByText("Stet Clita - AMOR")).toBeTruthy();
    expect(getByAltText("Chan image")).toBeTruthy();
    expect(getByAltText("Ariana image")).toBeTruthy();
    expect(getByAltText("Liz image")).toBeTruthy();
    expect(getByAltText("Bailey image")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  const CapturedPortraitMock = ({ options }) => {
    const [ref, inView] = useInView({ ...options });
    return <div ref={ref}>{inView.toString()}</div>;
  };
  it("should render element when in view", () => {
    const { getByText } = render(
      <CapturedPortraitMock options={{ threshold: 0.5 }}>
        Hi
      </CapturedPortraitMock>
    );
    mockAllIsIntersecting(0.1);
    expect(getByText("false")).toBeTruthy();

    mockAllIsIntersecting(0.5);
    expect(getByText("true")).toBeTruthy();
  });
});
