import { useMediaQuery } from "react-responsive";
import {
  Container,
  ImageOne,
  ImageTwo,
  TextButton,
  TextContainer,
  Title,
} from "./couples-portait.styles";

export default function CouplesPortrait({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CouplesPortrait.ImageOne = function CouplesPortraiImageOne({
  children,
  ...restProps
}) {
  return <ImageOne {...restProps}>{children}</ImageOne>;
};

CouplesPortrait.ImageTwo = function CouplesPortraiImageTwo({
  children,
  ...restProps
}) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  return isBigDevice && <ImageTwo {...restProps}>{children}</ImageTwo>;
};

CouplesPortrait.TextContainer = function CouplesPortraitTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

CouplesPortrait.TextButton = function CouplesPortraitTextButton({
  children,
  ...restProps
}) {
  return <TextButton {...restProps}>{children}</TextButton>;
};

CouplesPortrait.Title = function CouplesPortraitTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};
