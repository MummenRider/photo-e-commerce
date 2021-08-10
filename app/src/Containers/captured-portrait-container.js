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
}
