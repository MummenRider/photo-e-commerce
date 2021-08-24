import {
  Container,
  CenterBlock,
  Title,
  Description,
  Divider,
  ImageBlockOne,
  ImageBlockTwo,
  ImageBlockThree,
  LeftBlock,
  RightBlock,
  ImageItem,
} from "Components/AbstractPhoto/abstract-photo.styles";

export default function AbstractPhoto({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AbstractPhoto.LeftBlock = function AbstractPhotoLeftBlock({
  children,
  ...restProps
}) {
  return <LeftBlock {...restProps}>{children}</LeftBlock>;
};

AbstractPhoto.CenterBlock = function AbstractPhotoCenterBlock({
  children,
  ...restProps
}) {
  return <CenterBlock {...restProps}>{children}</CenterBlock>;
};

AbstractPhoto.RightBlock = function AbstractPhotoRightBlock({
  children,
  ...restProps
}) {
  return <RightBlock {...restProps}>{children}</RightBlock>;
};

AbstractPhoto.ImageItem = function AbstractPhotoImageItem({
  show,
  ...restProps
}) {
  return show ? <ImageItem {...restProps} data-testid="abstract-img" /> : null;
};

AbstractPhoto.Title = function AbstractPhotoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AbstractPhoto.Description = function AbstractPhotoDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

AbstractPhoto.Divider = function AbstractPhotoDivider({ show, ...restProps }) {
  return show ? <Divider {...restProps} /> : null;
};

AbstractPhoto.ImageBlockOne = function AbstractPhotoImageBlockOne({
  children,
  ...restProps
}) {
  return <ImageBlockOne {...restProps}>{children}</ImageBlockOne>;
};

AbstractPhoto.ImageBlockTwo = function AbstractPhotoImageBlockTwo({
  children,
  ...restProps
}) {
  return <ImageBlockTwo {...restProps}>{children}</ImageBlockTwo>;
};

AbstractPhoto.ImageBlockThree = function AbstractPhotoImageBlockThree({
  children,
  ...restProps
}) {
  return <ImageBlockThree {...restProps}>{children}</ImageBlockThree>;
};
