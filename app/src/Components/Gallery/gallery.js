import { GalleryContainer,GallerItem,GallerImage } from "./galley.styles";
import { useScroll, useSpring, useTransform } from "framer-motion";

export default function Gallery({ children, ...restProps }) {
    return <GalleryContainer {...restProps}>{children}</GalleryContainer>;
  }

  Gallery.Item = function GalleryItem({
    children,
    ...restProps
  }) {
    return <GallerItem {...restProps}>{children}</GallerItem >;
  };

  Gallery.Image = function GalleryImage({
    children,
    ...restProps
  }) {
    return <GallerImage whileHover={{scale: .96}} transition={{duration: .5, ease: [0.39, 0.575, 0.565, 1.0]}} {...restProps}>{children}</GallerImage >;
  };