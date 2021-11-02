import React from "react";
import {
  Container,
  Image,
  Description,
  Left,
  Right,
  ImageOne,
  ImageTwo,
} from "Components/About/about.styles";
import { useInView } from "react-intersection-observer";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Image = function AboutImage({ ...restProps }) {
  return <Image {...restProps} />;
};

About.Left = function AboutLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

About.ImageOne = function AboutImageOne({ children, ...restProps }) {
  return <ImageOne {...restProps}>{children}</ImageOne>;
};

About.ImageTwo = function AboutImageTwo({ options, children, ...restProps }) {
  const [ref, inView] = useInView({ ...options });

  return (
    <ImageTwo
      animate={{ rotate: inView ? "8deg" : "-8deg" }}
      initial={false}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 1,
      }}
      ref={ref}
      data-testid="img-rotate"
      {...restProps}
    >
      {children}
    </ImageTwo>
  );
};

About.Right = function AboutRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
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
        y: inView ? 0 : 50,
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
