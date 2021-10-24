import React from "react";
import StreetPhoto from "Components/StreetPhoto/street-photo";
import { useMediaQuery } from "react-responsive";
import img1 from "Assets/Images/stp_1.jpg";
import img2 from "Assets/Images/stp_2.jpg";
import img3 from "Assets/Images/stp_3.jpg";
import img4 from "Assets/Images/stp_4.jpg";

export function StreetPhotoContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <StreetPhoto isBigDevice={isBigDevice}>
      <StreetPhoto.CenterBlock>
        <StreetPhoto.ImageFrameOne>
          <StreetPhoto.Image src={img1} padTop="125.8%" />
        </StreetPhoto.ImageFrameOne>

        <StreetPhoto.TextContainer>
          <StreetPhoto.SubTitle>COMMUNITY, LOVE, RESPECT</StreetPhoto.SubTitle>
          <StreetPhoto.Title>
            Lorem Ipsum Dolor {<br />} Amet, Consetetur
          </StreetPhoto.Title>
          <StreetPhoto.SubTitle>Food Charity - Sikh</StreetPhoto.SubTitle>
        </StreetPhoto.TextContainer>

        <StreetPhoto.ImageFrameTwo>
          <StreetPhoto.Image src={img2} padTop="88.99%" />
        </StreetPhoto.ImageFrameTwo>

        <StreetPhoto.ImageFrameThree>
          <StreetPhoto.Image src={img3} padTop="51.70%" />
        </StreetPhoto.ImageFrameThree>

        <StreetPhoto.ImageFrameFour>
          <StreetPhoto.Image src={img4} padTop="125.84%" />
        </StreetPhoto.ImageFrameFour>
      </StreetPhoto.CenterBlock>
    </StreetPhoto>
  );
}
