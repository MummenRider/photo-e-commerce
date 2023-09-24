import {
  AboutContainer,
  Description,
  Image,
  ImageOne,
  ImageTwo,
  LargeQuote,
  MidQuote,
  ImageFive,
  ImageFour,
  ImageThree,
  SmallQuote,
  HeroStack,
  ImageDivider,
  ImageFourContainer,
  ImageDescription,
  ImageFiveContainer,
  TextContent,
  AboutTitle,
} from "Components/About/about.main.styles.js";
import useMeasure from "react-use-measure";
import { useScroll, useSpring, useTransform } from "framer-motion";

export default function AboutMain({ children, ...restProps }) {
  return <AboutContainer {...restProps}>{children}</AboutContainer>;
}

AboutMain.SmallQuote = function AboutMainSmallQuote({
  children,
  ...restProps
}) {
  return <SmallQuote {...restProps}>{children}</SmallQuote>;
};

AboutMain.AboutTitle = function AboutMainAboutTitle({
  variant,
  children,
  ...restProps
}) {
  return (
    <AboutTitle variants={variant} {...restProps}>
      {children}
    </AboutTitle>
  );
};

AboutMain.MidQuote = function AboutMainMidQuote({
  variant,
  children,
  ...restProps
}) {
  return (
    <MidQuote variants={variant} {...restProps}>
      {children}
    </MidQuote>
  );
};

AboutMain.LargeQuote = function AboutMainLargeQuote({
  children,
  ...restProps
}) {
  return <LargeQuote {...restProps}>{children}</LargeQuote>;
};

AboutMain.Description = function AboutMainDescription({
  variant,
  children,
  ...restProps
}) {
  return (
    <Description variants={variant} {...restProps}>
      {children}
    </Description>
  );
};

AboutMain.TextContent = function AboutMainTextContent({
  children,
  ...restProps
}) {
  return <TextContent {...restProps}>{children}</TextContent>;
};

AboutMain.ImageFourContainer = function AboutMainImageFourContainer({
  children,
  ...restProps
}) {
  return <ImageFourContainer {...restProps}>{children}</ImageFourContainer>;
};

AboutMain.ImageFiveContainer = function AboutMainImageFiveContainer({
  children,
  ...restProps
}) {
  return <ImageFiveContainer {...restProps}>{children}</ImageFiveContainer>;
};

AboutMain.HeroStack = function AboutMainHeroStack({
  variant,
  children,
  ...restProps
}) {
  return (
    <HeroStack
      variants={variant}
      initial="hidden"
      animate="show"
      {...restProps}
    >
      {children}
    </HeroStack>
  );
};

AboutMain.ImageOne = function AboutMainImageOne({
  variant,
  children,
  ...restProps
}) {
  return (
    <ImageOne variants={variant} {...restProps}>
      {children}
    </ImageOne>
  );
};

AboutMain.ImageTwo = function AboutMainImageTwo({
  variant,
  isBigDevice,
  children,
  ...restProps
}) {
  return (
    isBigDevice && (
      <ImageTwo variants={variant} {...restProps}>
        {children}
      </ImageTwo>
    )
  );
};

AboutMain.ImageDivider = function AboutMainImageDivider({
  children,
  ...restProps
}) {
  return <ImageDivider {...restProps}>{children}</ImageDivider>;
};

AboutMain.ImageThree = function AboutMainImageThree({
  children,
  ...restProps
}) {
  return <ImageThree {...restProps}>{children}</ImageThree>;
};

AboutMain.ImageFour = function AboutMainImageFour({ children, ...restProps }) {
  return <ImageFour {...restProps}>{children}</ImageFour>;
};

AboutMain.ImageFive = function AboutMainImageFive({ children, ...restProps }) {
  return <ImageFive {...restProps}>{children}</ImageFive>;
};

AboutMain.Image = function AboutMainImage({ ...restProps }) {
  return <Image {...restProps} />;
};

AboutMain.ImageDescription = function AboutMainImageDescription({
  children,
  ...restProps
}) {
  return <ImageDescription {...restProps}>{children}</ImageDescription>;
};
