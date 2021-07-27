import React from "react";
import {
  HeroBackground,
  HeroContent,
  HeroH1,
  HeroLine,
  ImageBackground,
  HeroContainer,
} from "Components/Hero/hero.styles.js";
import heroImg from "Assets/Images/hero-bg@2x.png";

// const HeroSection = () => {
//   return (
//     <HeroContainer data-testid="hero-container">
//       <HeroBackground>
//         <ImageBackground src={heroImg} alt="image-background" />
//       </HeroBackground>
//       <HeroContent>
//         <HeroH1>Photography is the story I fail to put into words.</HeroH1>
//       </HeroContent>
//       <HeroLine data-testid="explore-line" />
//     </HeroContainer>
//   );
// };

// export default HeroSection;

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.CircleFrame = function HeroCircleFrame({ ...restProps }) {
  return <CircleFrame {...restProps} />;
};

Hero.Circle = function HeroCircle({ ...restProps }) {
  return <Circle {...restProps} />;
};
