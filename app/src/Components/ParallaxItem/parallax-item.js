import React from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ParallaxItem = ({
  target,
  offset = ["start end", "end start"],
  yOutputRange = ["0%", "50%"],
  children,
  ...restProps
}) => {
  let { scrollYProgress } = useScroll({
    target: target,
    // start start - animate when target is on the top of the screen
    // start end - animate when target is visible at the end of the screen
    offset: offset,
  });
  const isBigDevice = useMediaQuery({ query: "(min-width: 1900px)" });

  const y = useTransform(scrollYProgress, [0, 1], yOutputRange);

  return (
    <motion.div style={{ y: isBigDevice && y, ...restProps }}>
      {children}
    </motion.div>
  );
};

export default ParallaxItem;
