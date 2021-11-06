import {
  Container,
  Block,
  Left,
  MainTitle,
  SubTitle,
  Right,
  TextContainer,
} from "Components/CapturedPortrait/captured-portrait.styles";
import { useInView } from "react-intersection-observer";
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
CapturedPortrait.TextContainer = function CapturedPortraitTextContainer({
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <TextContainer
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      {...restProps}
      ref={ref}
    >
      {children}
    </TextContainer>
  );
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
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <Right
      {...restProps}
      style={{ transformOrigin: "top center" }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.8,
      }}
      animate={{
        scale: inView ? 1 : 1.2,
      }}
      ref={ref}
    >
      {children}
    </Right>
  );
};
