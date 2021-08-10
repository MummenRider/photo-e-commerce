import {
  Container,
  Block,
  Left,
  MainTitle,
  SubTitle,
  Right,
} from "Components/CapturedPortrait/captured-portrait.styles";

export default function CapturedPortrait({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CapturedPortrait.Block = function CapturedPortraitBlock({
  children,
  ...restProps
}) {
  return <Block {...restProps}>{children}</Block>;
};

CapturedPortrait.Left = function CapturedPortraitLeft({
  children,
  ...restProps
}) {
  return <Left {...restProps}>{children}</Left>;
};

CapturedPortrait.SubTitle = function CapturedPortraitSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

CapturedPortrait.MainTitle = function CapturedPortraitMainTitle({
  children,
  ...restProps
}) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};

CapturedPortrait.Right = function CapturedPortraitRight({
  children,
  ...restProps
}) {
  return <Right {...restProps}>{children}</Right>;
};
