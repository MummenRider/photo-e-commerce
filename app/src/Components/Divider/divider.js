import React from "react";
import {
  Frame,
  Title,
  Subtitle,
  TextFrame,
  SVGFrame,
  ImageFrame,
  Inner,
} from "./divider.styles";
import { useInView } from "react-intersection-observer";
export default function Divider({ show, position, children, ...restProps }) {
  return show ? (
    <Frame data-testid="divider" position={position} {...restProps}>
      <Inner>{children}</Inner>
    </Frame>
  ) : null;
}

Divider.Title = function DividerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Divider.Subtitle = function DividerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Divider.TextContainer = function DividerTextContainer({
  children,
  ...restProps
}) {
  return <TextFrame {...restProps}>{children}</TextFrame>;
};

Divider.ImageFrame = function DividerImageFrame({ children, ...restProps }) {
  return <ImageFrame {...restProps} />;
};

Divider.SVGFrame = function DividerSVGFrame({
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <SVGFrame
      animate={{
        rotate: inView ? "180deg" : "0deg",
      }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 1,
      }}
      ref={ref}
      {...restProps}
    >
      {children}
    </SVGFrame>
  );
};
