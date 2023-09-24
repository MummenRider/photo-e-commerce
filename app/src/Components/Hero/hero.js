import React from "react";
import {
  Container,
  VideoBackground,
  VideoContent,
  Content,
} from "Components/Hero/hero.styles.js";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.VideoBackground = function HeroVideoBackground({
  children,
  ...restProps
}) {
  return <VideoBackground {...restProps}>{children}</VideoBackground>;
};

Hero.VideoContent = function HeroVideoContent({ ...restProps }) {
  return <VideoContent {...restProps} />;
};

Hero.Content = function HeroContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
