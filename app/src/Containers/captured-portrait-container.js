import CapturedPortrait from "Components/CapturedPortrait/captured-portrait";
import { capturedImageData } from "Components/CapturedPortrait/portrait-data";
import LoadImage from "Components/ImageBlock/image-block";

export function CapturedPortraitContainer() {
  return (
    <CapturedPortrait>
      {capturedImageData.map((imageData) => (
        <CapturedPortrait.Block key={imageData.id}>
          <CapturedPortrait.Left
            bkg={imageData.bkg}
            fontColor={imageData.fontColor}
          >
            <CapturedPortrait.TextContainer
              options={{ rootMargin: "120% 0px 0px 0px", threshold: 0.05 }}
            >
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
          <CapturedPortrait.Right
            options={{ rootMargin: "130% 0px 0px 0px", threshold: 0.05 }}
          >
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
}
