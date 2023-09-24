import { useScroll, useSpring, useTransform } from "framer-motion";

import useMeasure from "react-use-measure";
import {
  Container,
  Frame,
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageStack,
  TitleContainer,
  ContentInner,
  Title,
  Content,
  Description,
  Image,
  ExtraLargeText,
  ImageThreeFrame,
  ImageOneFrame,
} from "./maternity-portrait.styles";
import { useLayoutEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

const content = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      ease: [0.39, 0.575, 0.565, 1.0],
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.39, 0.575, 0.565, 1.0],
    },
  },
};
export default function MaternityPortrait({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MaternityPortrait.Frame = function MaternityPortraitFrame({
  children,
  ...restProps
}) {
  return <Frame {...restProps}>{children}</Frame>;
};

MaternityPortrait.Content = function MaternityPortraitContent({
  children,
  ...restProps
}) {
  return (
    <Content
      variants={content}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true }}
      {...restProps}
    >
      {children}
    </Content>
  );
};

MaternityPortrait.ImageOne = function MaternityPortraitImageOne({
  children,
  ...restProps
}) {
  return <ImageOne {...restProps}>{children}</ImageOne>;
};

MaternityPortrait.ImageTwo = function MaternityPortraitImageTwo({
  animateY,
  children,
  ...restProps
}) {
  return (
    <ImageTwo style={{ y: animateY }} {...restProps}>
      {children}
    </ImageTwo>
  );
};

MaternityPortrait.ImageThree = function MaternityPortraitImageThree({
  children,
  ...restProps
}) {
  return <ImageThree {...restProps}>{children}</ImageThree>;
};

MaternityPortrait.ImageFour = function MaternityPortraitImageFour({
  children,
  ...restProps
}) {
  return <ImageFour {...restProps}>{children}</ImageFour>;
};

MaternityPortrait.Image = function MaternityPortraitImage({ ...restProps }) {
  return <Image {...restProps} />;
};

MaternityPortrait.TitleContainer = function MaternityPortraitTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

MaternityPortrait.Title = function MaternityPortraitTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

MaternityPortrait.Description = function MaternityPortraitDescription({
  children,
  ...restProps
}) {
  return (
    <Description variants={item} {...restProps}>
      {children}
    </Description>
  );
};

MaternityPortrait.ImageStack = function MaternityPortraitImageStack({
  children,
  ...restProps
}) {
  return <ImageStack {...restProps}>{children}</ImageStack>;
};

MaternityPortrait.ExtraLargeText = function MaternityPortraitExtraLargeText({
  children,
  ...restProps
}) {
  return (
    <ExtraLargeText variants={item} {...restProps}>
      {children}
    </ExtraLargeText>
  );
};

MaternityPortrait.ContentInner = function MaternityPortraitContentInner({
  children,
  ...restProps
}) {
  return <ContentInner {...restProps}>{children}</ContentInner>;
};

MaternityPortrait.ImageThreeFrame = function MaternityPortraitImageThreeFrame({
  children,
  ...restProps
}) {
  return <ImageThreeFrame {...restProps}>{children}</ImageThreeFrame>;
};

MaternityPortrait.ImageOneFrame = function MaternityPortraitImageOneFrame({
  children,
  ...restProps
}) {
  return <ImageOneFrame {...restProps}>{children}</ImageOneFrame>;
};
