import {
  Container,
  SubTitle,
  Title,
  TextContainer,
  ImageBlockOne,
  ImageBlockTwo,
  ImageBlockThree,
  ImageBlockFour,
} from "Components/StreetPhoto/street-photo.styles";

export default function StreetPhoto({ isBigDevice, children, ...restProps }) {
  return isBigDevice ? (
    <Container data-testid="str-photo-component" {...restProps}>
      {children}
    </Container>
  ) : null;
}
StreetPhoto.TextContainer = function StreetPhotoTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};
StreetPhoto.Title = function StreetPhotoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

StreetPhoto.SubTitle = function StreetPhotoSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

StreetPhoto.ImageBlockOne = function StreetPhotoImageBlockOne({
  children,
  ...restProps
}) {
  return <ImageBlockOne {...restProps}>{children}</ImageBlockOne>;
};

StreetPhoto.ImageBlockTwo = function StreetPhotoImageBlockTwo({
  children,
  ...restProps
}) {
  return <ImageBlockTwo {...restProps}>{children}</ImageBlockTwo>;
};

StreetPhoto.ImageBlockThree = function StreetPhotoImageBlockThree({
  children,
  ...restProps
}) {
  return <ImageBlockThree {...restProps}>{children}</ImageBlockThree>;
};

StreetPhoto.ImageBlockFour = function StreetPhotoImageBlockFour({
  children,
  ...restProps
}) {
  return <ImageBlockFour {...restProps}>{children}</ImageBlockFour>;
};
