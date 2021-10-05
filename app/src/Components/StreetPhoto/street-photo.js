import {
  Container,
  SubTitle,
  Title,
  TextContainer,
  ImageBlockOne,
  ImageBlockTwo,
  ImageBlockThree,
  ImageBlockFour,
  ColumnOne,
  ColumnThree,
  ColumnTwo,
} from 'Components/StreetPhoto/street-photo.styles';
import {
  useMotionValue,
  useTransform,
  useVelocity,
  useViewportScroll,
  useSpring,
  useAnimation,
} from 'framer-motion';
import { useContext } from 'react';
import { PixelContext } from 'App';
import { MomentumScroll } from 'global.styles';
import ScrollContainer from 'Components/SmoothScroll/ScrollContainer';
import ParallaxElement from 'Components/SmoothScroll/ParllaxElement';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function StreetPhoto({ isBigDevice, children, ...restProps }) {
  return isBigDevice ? (
    <Container data-testid='str-photo-component' {...restProps}>
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

StreetPhoto.ImageBlockOne = function StreetPhotoImageBlockOne({
  options,
  children,
  ...restProps
}) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  // const img1 = useRef(null);
  const y1 = useTransform(
    scrollY,
    [3200, 4000],
    [0, -300],
    [0.43, 0.13, 0.23, 0.96]
  );

  // const physics = { damping: 15, mass: 0.5, stiffness: 55 }; // easing of smooth scroll
  // const spring = useSpring(y1, physics); // apply easing to the negative scroll value
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
    <ImageBlockOne
      {...restProps}
      ref={ref}
      // initial={{ y: -300 }}
      transition={{
        type: 'tween',
        duration: 0.6,
        delay: 0.3,
      }}
      style={{
        y: y1,
      }}
    >
      {children}
    </ImageBlockOne>
  );
};

// StreetPhoto.ImageBlockTwo = function StreetPhotoImageBlockTwo({
//   children,
//   ...restProps
// }) {
//   return <ImageBlockTwo {...restProps}>{children}</ImageBlockTwo>;
// };

// StreetPhoto.ImageBlockThree = function StreetPhotoImageBlockThree({
//   children,
//   ...restProps
// }) {
//   return <ImageBlockThree {...restProps}>{children}</ImageBlockThree>;
// };

// StreetPhoto.ImageBlockFour = function StreetPhotoImageBlockFour({
//   children,
//   ...restProps
// }) {
//   return <ImageBlockFour {...restProps}>{children}</ImageBlockFour>;
// };

StreetPhoto.ColumnOne = function StreetPhotoColumnOne({
  children,
  ...restProps
}) {
  return <ColumnOne {...restProps}>{children}</ColumnOne>;
};

StreetPhoto.ColumnTwo = function StreetPhotoColumnTwo({
  children,
  ...restProps
}) {
  return <ColumnTwo {...restProps}>{children}</ColumnTwo>;
};

StreetPhoto.ColumnThree = function StreetPhotoColumnThree({
  children,
  ...restProps
}) {
  return <ColumnThree {...restProps}>{children}</ColumnThree>;
};
