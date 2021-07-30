import React from "react";
import {
  Text,
  Image,
  Container,
  ImageFrame,
  TextContainer,
  SVG,
  Path,
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

Hero.SVG = function HeroSvg({ children, ...restProps }) {
  return <SVG {...restProps}>{children}</SVG>;
};

Hero.Path = function HeroPath({ ...restProps }) {
  return <Path {...restProps} />;
};
