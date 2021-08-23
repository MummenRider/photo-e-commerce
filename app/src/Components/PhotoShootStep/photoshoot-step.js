import {
  Container,
  Left,
  Inner,
  Right,
  Title,
  SubTitle,
  List,
  Item,
  Image,
  ContactBtn,
  SvgInner,
  SvgWave,
  Outer,
  Wrapper,
} from "Components/PhotoShootStep/photoshoot-step.styles";

export default function PhotoShootStep({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PhotoShootStep.Left = function PhotoShootLeft({ children, ...restProps }) {
  return (
    <Left {...restProps}>
      <Wrapper>{children}</Wrapper>
    </Left>
  );
};

PhotoShootStep.Inner = function PhotoShootInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

PhotoShootStep.Outer = function PhotoShootOuter({ children, ...restProps }) {
  return <Outer {...restProps}>{children}</Outer>;
};

PhotoShootStep.Right = function PhotoShootRight({
  isMobile,
  children,
  ...restProps
}) {
  return isMobile ? <Right {...restProps}>{children}</Right> : null;
};

PhotoShootStep.Title = function PhotoShootTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

PhotoShootStep.SubTitle = function PhotoShootSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

PhotoShootStep.List = function PhotoShootList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

PhotoShootStep.Item = function PhotoShootItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

PhotoShootStep.Image = function PhotoShootItem({ ...restProps }) {
  return <Image {...restProps} />;
};

PhotoShootStep.ContactBtn = function PhotoShootContactBtn({
  children,
  ...restProps
}) {
  return <ContactBtn {...restProps}>{children}</ContactBtn>;
};

PhotoShootStep.SvgWave = function PhotoShootStepSvgWave({
  children,
  ...restProps
}) {
  return <SvgWave {...restProps}>{children}</SvgWave>;
};

PhotoShootStep.SvgInner = function PhotoShootStepSvgInner({
  children,
  ...restProps
}) {
  return <SvgInner {...restProps}>{children}</SvgInner>;
};
