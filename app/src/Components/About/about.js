import React from "react";
import {
  AboutContainer,
  AboutDescription,
  AboutImage,
  ImageContent,
  DescriptionTitle,
  DescriptionParagraph,
  ImageCircleContent,
  AboutCircleImage,
} from "./about.style";

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutImage>
          <ImageContent alt="nico-img" />
        </AboutImage>
        <AboutDescription>
          <DescriptionTitle>Who am I</DescriptionTitle>
          <DescriptionParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
            iaculis urna id volutpat lacus laoreet non. Ut eu sem integer vitae
            justo eget. Iaculis at erat pellentesque adipiscing commodo. Nam at
            lectus urna duis convallis convallis tellus id. Sed nisi lacus sed
            viverra tellus in hac. Id cursus metus aliquam eleifend mi in nulla.
            Nulla posuere sollicitudin aliquam ultrices sagittis. Est ante in
            nibh mauris cursus mattis molestie. Ut tortor pretium viverra
            suspendisse potenti nullam ac. Egestas integer eget aliquet nibh
            praesent tristique magna sit amet. Vitae nunc sed velit dignissim
            sodales ut eu sem. Faucibus in ornare quam viverra orci sagittis eu.
            Justo laoreet sit amet cursus sit amet dictum sit amet. Orci a
            scelerisque purus semper eget duis at tellus. Purus ut faucibus
            pulvinar elementum. Odio facilisis mauris sit amet massa vitae
            tortor.
          </DescriptionParagraph>
        </AboutDescription>
        <AboutCircleImage>
          <ImageCircleContent alt="abstract-circle" />
        </AboutCircleImage>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
