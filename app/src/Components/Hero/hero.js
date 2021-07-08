import React from "react";
import {
  HeroBackground,
  HeroContent,
  HeroH1,
  HeroLine,
  ImageBackground,
  Section,
} from "Components/Hero/hero.styles.js";
import heroImg from "Assets/Images/hero-bg@2x.png";

const HeroSection = () => {
  return (
    <Section data-testid="hero-container">
      <HeroBackground>
        <ImageBackground src={heroImg} alt="image-background" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Photography is the story I fail to put into words.</HeroH1>
      </HeroContent>
      <HeroLine data-testid="explore-line" />
    </Section>
  );
};

export default HeroSection;
