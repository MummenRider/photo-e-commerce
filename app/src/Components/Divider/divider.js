import React from "react";
import {
  Frame,
  Inner,
  Title,
  Subtitle,
  ImageContent,
  Button,
  ButtonText,
  ButtonIcon,
  ButtonIconPath,
} from "./divider.style";

export default function Divider({ children, ...restProps }) {
  return (
    <Frame {...restProps}>
      <Inner>{children}</Inner>
    </Frame>
  );
}

Divider.Title = function DividerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Divider.Subtitle = function DividerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Divider.ImageContent = function DividerImageContent({ ...restProps }) {
  return <ImageContent {...restProps} />;
};

Divider.Button = function DividerButton({
  destination,
  children,
  ...restProps
}) {
  return (
    <Button onClick={destination} {...restProps}>
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
