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
  ImageBlockTwoInner,
} from 'Components/AbstractPhoto/abstract-photo.styles';

import { useInView } from 'react-intersection-observer';

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
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <RightBlock
      animate={{
        x: inView ? 0 : 200,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 1,
      }}
      {...restProps}
      ref={ref}
    >
      {children}
    </RightBlock>
  );
};

AbstractPhoto.ImageItem = function AbstractPhotoImageItem({
  show,
  ...restProps
}) {
  return show ? <ImageItem {...restProps} data-testid='abstract-img' /> : null;
};

AbstractPhoto.Title = function AbstractPhotoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AbstractPhoto.ImageBlockTwoInner = function AbstractPhotoImageBlockTwoInner({
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <ImageBlockTwoInner
      animate={{
        x: inView ? 0 : -200,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 1,
      }}
      ref={ref}
      {...restProps}
    >
      {children}
    </ImageBlockTwoInner>
  );
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
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });

  return (
    <ImageBlockOne
      initial={false}
      animate={{
        y: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
      }}
      transition={{ delay: 0.2, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      {...restProps}
      ref={ref}
    >
      {children}
    </ImageBlockOne>
  );
};

AbstractPhoto.ImageBlockTwo = function AbstractPhotoImageBlockTwo({
  children,
  ...restProps
}) {
  return <ImageBlockTwo {...restProps}>{children}</ImageBlockTwo>;
};

AbstractPhoto.ImageBlockThree = function AbstractPhotoImageBlockThree({
  options,
  children,
  ...restProps
}) {
  const [ref, inView] = useInView({ ...options });
  return (
    <ImageBlockThree
      initial={false}
      animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      {...restProps}
      ref={ref}
    >
      {children}
    </ImageBlockThree>
  );
};
