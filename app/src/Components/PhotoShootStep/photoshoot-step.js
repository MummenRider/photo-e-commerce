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
  Blob,
  BlobsContainer,
} from 'Components/PhotoShootStep/photoshoot-step.styles';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView();
  return isMobile ? (
    <Right
      style={{ transformOrigin: 'top center' }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.8,
      }}
      animate={{
        scale: inView ? 1 : 1.2,
      }}
      {...restProps}
      ref={ref}
    >
      {children}
    </Right>
  ) : null;
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
  return (
    <ContactBtn whileHover={{}} {...restProps}>
      {children}
    </ContactBtn>
  );
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

PhotoShootStep.Blob = function PhotoShootStepBlob({ ...restProps }) {
  return <Blob {...restProps} />;
};

PhotoShootStep.BlobsContainer = function PhotoShootStepBlobsContainer({
  children,
  ...restProps
}) {
  return <BlobsContainer {...restProps}>{children}</BlobsContainer>;
};
