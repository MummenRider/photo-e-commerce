import React from "react";
import {
  Frame,
  Inner,
  Title,
  Subtitle,
  ImageFrame,
  Button,
  ButtonText,
  ButtonIcon,
  ButtonIconPath,
} from "./divider.styles";

export default function Divider({ show, position, children, ...restProps }) {
  return show ? (
    <Frame data-testid="divider" {...restProps}>
      <Inner position={position}>{children}</Inner>
    </Frame>
  ) : null;
}

Divider.Title = function DividerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Divider.Subtitle = function DividerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Divider.ImageFrame = function DividerImagFramet({ children, ...restProps }) {
  return <ImageFrame {...restProps}>{children}</ImageFrame>;
};

Divider.Button = function DividerButton({
  destination,
  children,
  ...restProps
}) {
  return (
    <Button
      onClick={destination}
      {...restProps}
      whileHover={{ gap: "100px" }}
      initial={{ gap: "30px" }}
      transition={{
        type: "tween",
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.6,
      }}
    >
      {children}
    </Button>
  );
};

Divider.ButtonText = function DividerButtonText({ children, ...restProps }) {
  return <ButtonText {...restProps}>{children}</ButtonText>;
};

Divider.ButtonIcon = function DividerButtonIcon({ children, ...restProps }) {
  return <ButtonIcon {...restProps}>{children}</ButtonIcon>;
};
Divider.ButtonIconPath = function DividerButtonIconPath({ ...restProps }) {
  return <ButtonIconPath {...restProps} />;
};
