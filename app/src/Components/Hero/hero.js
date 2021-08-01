import React from "react";
import {
  Text,
  Image,
  Container,
  ImageFrame,
  TextContainer,
} from "Components/Hero/hero.styles.js";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.ImageFrame = function HeroImageFrame({ children, ...restProps }) {
  return <ImageFrame {...restProps}>{children}</ImageFrame>;
};

Hero.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Hero.TextContainer = function HeroTextContainer({ children, ...restProps }) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
