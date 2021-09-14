import React from "react";
import {
  Container,
  Image,
  Content,
  Title,
  Description,
  Inner,
  Frames,
  Left,
  Right,
} from "Components/About/about.styles";
import { useInView } from "react-intersection-observer";

export default function About({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

About.Image = function AboutImage({ src, ...restProps }) {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -30% 0px",
  });
  return (
    <Frames {...restProps}>
      <Image
        url={src}
        ref={ref}
        animate={{
          scale: inView ? 1.0 : 1.1,
        }}
        transition={{
          ease: [0.43, 0.13, 0.23, 0.96],
          duration: 0.8,
        }}
      />
    </Frames>
  );
};

About.Content = function AboutContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

About.Left = function AboutLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

About.Right = function AboutRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

About.Title = function AboutTitle({ isBigDevice, children, ...restProps }) {
  return isBigDevice ? <Title {...restProps}>{children}</Title> : null;
};

About.Description = function AboutDescription({
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });

  return (
    <Description
      ref={ref}
      {...restProps}
      animate={{
        y: inView ? 0 : 100,
        opacity: inView ? [0.2, 0.4, 0.8, 1] : 0,
      }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 1,
      }}
    >
      {children}
    </Description>
  );
};
