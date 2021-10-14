import {
  Container,
  SubTitle,
  Title,
  TextContainer,
  Image,
  ImageFrameOne,
  ImageFrameTwo,
  ImageFrameThree,
  ImageFrameFour,
  CenterBlock,
} from "Components/StreetPhoto/street-photo.styles";
import {
  useMotionValue,
  useTransform,
  useVelocity,
  useViewportScroll,
  useSpring,
  useAnimation,
} from "framer-motion";
import { useContext, useState } from "react";
import { PixelContext } from "App";
import { MomentumScroll } from "global.styles";
import ScrollContainer from "Components/SmoothScroll/ScrollContainer";
import ParallaxElement from "Components/SmoothScroll/ParllaxElement";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function StreetPhoto({ isBigDevice, children, ...restProps }) {
  return isBigDevice ? (
    <Container data-testid="str-photo-component" {...restProps}>
      {children}
    </Container>
  ) : null;
}
StreetPhoto.TextContainer = function StreetPhotoTextContainer({
  children,
  ...restProps
}) {
  // const { scrollYProgress, scrollY } = useViewportScroll();
  // const controls = useAnimation();
  // const yAnim = useTransform(scrollYProgress, [0.215, 0.32], ['10%', '70%']);
  // const ease = { damping: 15, mass: 0.5, stiffness: 55 };
  // const spring = useSpring(yAnim, ease);

  return <TextContainer {...restProps}>{children}</TextContainer>;
};
StreetPhoto.Title = function StreetPhotoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

StreetPhoto.SubTitle = function StreetPhotoSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

StreetPhoto.Image = function StreetPhotoImage({
  options,
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  // const img1 = useRef(null);

  const [ref, inView] = useInView({ ...options });
  // const animateControl = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     animateControl.start({
  //       y: 0,
  //     });
  //   } else {
  //     animateControl.stop();
  //   }
  // }, [inView]);

  return (
    <Image {...restProps} ref={ref}>
      {children}
    </Image>
  );
};

StreetPhoto.CenterBlock = function StreetPhotoCenterBlock({
  children,
  ...restProps
}) {
  return <CenterBlock {...restProps}>{children}</CenterBlock>;
};

StreetPhoto.ImageFrameOne = function StreetPhotoImageFrameOne({
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [2640, 3050], [-200, 0]);
  const ease = { damping: 15, mass: 0.5, stiffness: 55 };
  const spring = useSpring(yAnim, ease);

  return (
    <ImageFrameOne
      style={{
        y: spring,
      }}
      {...restProps}
    >
      {children}
    </ImageFrameOne>
  );
};

StreetPhoto.ImageFrameTwo = function StreetPhotoImageFrameTwo({
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3000, 3530], [200, 0]);
  const ease = { damping: 15, mass: 0.5, stiffness: 55 };
  const spring = useSpring(yAnim, ease);
  return (
    <ImageFrameTwo style={{ y: spring }} {...restProps}>
      {children}
    </ImageFrameTwo>
  );
};

StreetPhoto.ImageFrameThree = function StreetPhotoImageFrameThree({
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3712, 3900], [100, 0]);
  const ease = { damping: 15, mass: 0.5, stiffness: 55 };
  const spring = useSpring(yAnim, ease);
  return (
    <ImageFrameThree style={{ y: spring }} {...restProps}>
      {children}
    </ImageFrameThree>
  );
};

StreetPhoto.ImageFrameFour = function StreetPhotoImageFrameFour({
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3530, 4200], [-100, 0]);
  const ease = { damping: 15, mass: 0.5, stiffness: 55 };
  const spring = useSpring(yAnim, ease);

  return (
    <ImageFrameFour style={{ y: spring }} {...restProps}>
      {children}
    </ImageFrameFour>
  );
};
