import React from "react";
import {
  Container,
  Image,
  Content,
  Title,
  Description,
  Inner,
  Frames,
} from "Components/About/about.styles";

export default function About({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

About.Image = function AboutImage({ src, ...restProps }) {
  return (
    <Frames {...restProps}>
      <Image url={src} />
    </Frames>
  );
};

About.Content = function AboutContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

About.Title = function AboutTitle({ isBigDevice, children, ...restProps }) {
  return isBigDevice ? <Title {...restProps}>{children}</Title> : null;
};

About.Description = function AboutDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
