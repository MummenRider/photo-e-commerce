import React from "react";
import { ImageContainer } from "./parallax.styles";
import { useScroll, useTransform } from "framer-motion";

const ParallaxImage = ({
  target,
  imgSrc,
  offset = ["start end", "end start"],
  yOutputRange = ["0%", "40%"],
}) => {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: offset,
  });
  const y = useTransform(scrollYProgress, [0, 1], yOutputRange);
  return <ImageContainer src={imgSrc} style={{ backgroundPositionY: y }} />;
};

export default ParallaxImage;
