import { ResizeObserver } from "@juggle/resize-observer";
import { NativeScroll } from "Components/ParallaxContent/parallax-content.styles";
import {
  useCycle,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

import {
  ButtonContainer,
  CircleBG,
  Container,
  Content,
  Description,
  Image,
  ImageFour,
  ImageOne,
  ImageStack,
  ImageThree,
  ImageTwo,
  Outer,
  TextQuoteOne,
  TextQuoteThree,
  TextQuoteTwo,
  Title,
} from "./family-sessions.styles";

export default function FamilySession({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FamilySession.Outer = function FamilySessionOuter({ children, ...restProps }) {
  return <Outer {...restProps}>{children}</Outer>;
};

FamilySession.ImageStack = function FamilySessionImageStack({
  children,
  ...restProps
}) {
  return <ImageStack {...restProps}>{children}</ImageStack>;
};

FamilySession.ImageOne = function FamilySessionImageOne({
  children,
  ...restProps
}) {
  return <ImageOne {...restProps}>{children}</ImageOne>;
};

FamilySession.ImageTwo = function FamilySessionImageTwo({
  variants,
  children,
  ...restProps
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <ImageTwo
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      {...restProps}
    >
      {children}
    </ImageTwo>
  );
};

FamilySession.ImageThree = function FamilySessionImageThree({
  children,
  ...restProps
}) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  return isBigDevice && <ImageThree {...restProps}>{children}</ImageThree>;
};

FamilySession.ImageFour = function FamilySessionImageFour({
  children,
  ...restProps
}) {
  return <ImageFour {...restProps}>{children}</ImageFour>;
};

FamilySession.Image = function FamilySessionImage({ ...restProps }) {
  return <Image {...restProps} />;
};

FamilySession.Title = function FamilySessionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FamilySession.Content = function FamilySessionContent({
  variants,
  children,
  ...restProps
}) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Content
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      {...restProps}
    >
      {children}
    </Content>
  );
};

FamilySession.Description = function FamilySessionDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

FamilySession.ButtonContainer = function FamilySessionButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

FamilySession.TextQuoteOne = function FamilySessionTextQuoteOne({
  isBigDevice,
  children,
  ...restProps
}) {
  return <TextQuoteOne {...restProps}>{children}</TextQuoteOne>;
};

FamilySession.TextQuoteTwo = function FamilySessionTextQuoteTwo({
  isBigDevice,
  children,
  ...restProps
}) {
  return <TextQuoteTwo {...restProps}>{children}</TextQuoteTwo>;
};

FamilySession.TextQuoteThree = function FamilySessionTextQuoteThree({
  isBigDevice,
  children,
  ...restProps
}) {
  return <TextQuoteThree {...restProps}>{children}</TextQuoteThree>;
};

FamilySession.CircleBG = function FamilySessionCircleBG({ ...restProps }) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  return isBigDevice && <CircleBG {...restProps} />;
};
