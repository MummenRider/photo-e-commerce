import React from "react";
import StreetPhoto from "Components/StreetPhoto/street-photo";
import LoadImage from "Components/ImageBlock/image-block";
import { useMediaQuery } from "react-responsive";

export function StreetPhotoContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <StreetPhoto isBigDevice={isBigDevice}>
      <StreetPhoto.TextContainer>
        <StreetPhoto.SubTitle>COMMUNITY, LOVE, RESPECT</StreetPhoto.SubTitle>
        <StreetPhoto.Title>
          Lorem Ipsum Dolor Amet, Consetetur
        </StreetPhoto.Title>
        <StreetPhoto.SubTitle>Food Charity - Sikh</StreetPhoto.SubTitle>
      </StreetPhoto.TextContainer>

      <StreetPhoto.ImageBlockOne>
        <LoadImage
          src={require("Assets/Images/stp_1.jpg").default}
          fallback={require("Assets/Images/stp_1.webp").default}
          alt={"picture 1"}
        />
      </StreetPhoto.ImageBlockOne>

      <StreetPhoto.ImageBlockTwo>
        <LoadImage
          src={require("Assets/Images/stp_2.jpg").default}
          fallback={require("Assets/Images/stp_2.webp").default}
          alt={"picture 1"}
        />
      </StreetPhoto.ImageBlockTwo>

      <StreetPhoto.ImageBlockThree>
        <LoadImage
          src={require("Assets/Images/stp_3.jpg").default}
          fallback={require("Assets/Images/stp_3.webp").default}
          alt={"picture 1"}
        />
      </StreetPhoto.ImageBlockThree>

      <StreetPhoto.ImageBlockFour>
        <LoadImage
          src={require("Assets/Images/stp_4.jpg").default}
          fallback={require("Assets/Images/stp_4.webp").default}
          alt={"picture 1"}
        />
      </StreetPhoto.ImageBlockFour>
    </StreetPhoto>
  );
}
