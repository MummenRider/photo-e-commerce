import {
  Container,
  ButtonContainer,
  TextContent,
  NextButton,
  PreviousButton,
  ImageFrame,
  ItemContainer,
  SmallTitleContainer,
} from "./review.styles";
import { useMediaQuery } from "react-responsive";

export default function Review({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Review.ItemContainer = function ReviewItemContainer({
  innerRef,
  children,
  ...restProps
}) {
  return (
    <ItemContainer ref={innerRef} {...restProps}>
      {children}
    </ItemContainer>
  );
};

Review.ImageFrame = function ReviewImageFrame({ children, ...restProps }) {
  return <ImageFrame {...restProps}>{children}</ImageFrame>;
};

Review.TextContent = function ReviewTextContent({ children, ...restProps }) {
  return <TextContent {...restProps}>{children}</TextContent>;
};

Review.SmallTitleContainer = function ReviewSmallTitleContainer({
  children,
  ...restProps
}) {
  return <SmallTitleContainer {...restProps}>{children}</SmallTitleContainer>;
};

Review.ButtonContainer = function ReviewButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Review.PreviousButton = function ReviewPreviousButton({
  previousSlide,
  ...restProps
}) {
  return <PreviousButton onClick={previousSlide} {...restProps} />;
};

Review.NextButton = function ReviewNextButton({ nextSlide, ...restProps }) {
  return <NextButton onClick={nextSlide} {...restProps} />;
};
