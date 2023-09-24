import React, { useRef } from "react";
import {
  Container,
  Image,
  Description,
  BottonContainer,
  Content,
  ImageOne,
  Frame,
  SubTitle,
  Title,
  FrameDescription,
  FrameTitle,
} from "Components/About/about.styles";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const leftImageVariant = {
  hidden: {
    WebkitClipPath: "inset(0% 99.99% 0% 0% )",
    clipPath: "inset(0% 99.99% 0% 0%)",
  },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    WebkitClipPath: "inset(0% 0% 0% 0%)",

    transition: {
      duration: 1.5,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
};
const textContentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {},
  },
};

const subTitleVariant = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 0.6,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const titleVariant = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const descVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Frame = function AboutFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

About.Content = function AboutContent({ children, ...restProps }) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 67.5em)" });
  return (
    <Content
      initial={isBigDevice && "hidden"}
      whileInView={isBigDevice && "show"}
      viewport={{ amount: 0.8, once: true }}
      variants={textContentVariant}
      {...restProps}
    >
      {children}
    </Content>
  );
};

About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
  return (
    <SubTitle variants={subTitleVariant} {...restProps}>
      {children}
    </SubTitle>
  );
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Description = function AboutDescription({ children, ...restProps }) {
  return (
    <FrameDescription variants={descVariant}>
      <Description {...restProps}>{children}</Description>
    </FrameDescription>
  );
};

About.BottonContainer = function AboutBottonContainer({
  children,
  ...restProps
}) {
  return <BottonContainer {...restProps}>{children}</BottonContainer>;
};

About.FrameTitle = function AboutFrameTitle({ children, ...restProps }) {
  return (
    <FrameTitle variants={titleVariant} {...restProps}>
      {children}
    </FrameTitle>
  );
};

About.Image = function AboutImage({ ...restProps }) {
  return <Image {...restProps} />;
};

About.ImageOne = function AboutImageOne({ children, ...restProps }) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 67.5em)" });
  const [ref, isInView] = useInView({
    rootMargin: "0% 0% -20% 0%",
    triggerOnce: true,
  });
  return (
    <ImageOne
      ref={ref}
      initial={isBigDevice && "hidden"}
      animate={isInView ? "show" : "hidden"}
      // whileInView={isBigDevice && "show"}
      // viewport={{ once: true, amount: 0.3 }}
      variants={leftImageVariant}
      {...restProps}
    >
      {children}
    </ImageOne>
  );
};
