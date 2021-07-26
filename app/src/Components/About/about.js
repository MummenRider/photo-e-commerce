import React from "react";
import {
  AboutDescription,
  AboutImage,
  ImageContent,
  DescriptionTitle,
  DescriptionParagraph,
  AboutWrapper,
  AboutSection,
} from "Components/About/about.style";
import nicoImg from "Assets/Images/mobile-abt-nico@3x.png";

const AboutComponent = () => {
  return (
    <>
      <AboutSection>
        <AboutWrapper>
          <DescriptionTitle data-testid="about-header">
            Who am I
          </DescriptionTitle>
          <AboutImage>
            <ImageContent bkgImg={nicoImg} />
          </AboutImage>
          <AboutDescription>
            <DescriptionTitle>Who am I</DescriptionTitle>
            <DescriptionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
              iaculis urna id volutpat lacus laoreet non. Ut eu sem integer
              vitae justo eget. Iaculis at erat pellentesque adipiscing commodo.
              Nam at lectus urna duis convallis convallis tellus id. Sed nisi
              lacus sed viverra tellus in hac. Id cursus metus aliquam eleifend
              mi in nulla. Nulla posuere sollicitudin aliquam ultrices sagittis.
              Est ante in nibh mauris cursus mattis molestie. Qas utsaqa sasas
              tortorsa pretium viverra suspendisse potenti nullam ac.
            </DescriptionParagraph>

            <DescriptionParagraph>
              Egestas integer eget aliquet nibh praesent tristique magna sit
              amet. Vitae nunc sed velit dignissim sodales ut eu sem. Faucibus
              in ornare quam viverra orci sagittis eu. Justo laoreet sit amet
              cursus sit amet dictum sit amet. Orci a scelerisque purus semper
              eget duis at tellus. Purus ut faucibus pulvinar elementum. Odio
              facilisis mauris sit amet massa vitae tortor.
            </DescriptionParagraph>

            <DescriptionParagraph>
              Faucibus in ornare quam viverra orci sagittis eu. Justo laoreet
              sit amet cursus sit amet dictum sit amet. Orci a scelerisque purus
              semper eget duis at tellus. Purus ut faucibus pulvinar elementum.
              Odio facilisis mauris sit amet massa vitae tortor.
            </DescriptionParagraph>
          </AboutDescription>
        </AboutWrapper>
      </AboutSection>
    </>
  );
};

export default AboutComponent;
