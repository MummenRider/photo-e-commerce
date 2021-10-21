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
import { useTransform, useViewportScroll, useSpring } from "framer-motion";

const ease = { damping: 15, mass: 0.5, stiffness: 55 };
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
  return <Image {...restProps}>{children}</Image>;
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
  const { scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [2640, 3050], [-200, 0]);
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
  const { scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3000, 3530], [200, 0]);

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
  const { scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3712, 3900], [100, 0]);

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
  const { scrollY } = useViewportScroll();
  const yAnim = useTransform(scrollY, [3530, 4200], [-100, 0]);
  const spring = useSpring(yAnim, ease);

  return (
    <ImageFrameFour style={{ y: spring }} {...restProps}>
      {children}
    </ImageFrameFour>
  );
};
