import { useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import useMeasure from "react-use-measure";
import { NativeScroll, ScrollContainer } from "./parallax-content.styles";

const ParallaxContent = ({ children }) => {
  const [ref, { height }] = useMeasure();
  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, height], [0, -height]);
  const spring = useSpring(transform, {
    damping: 50,
    mass: 0.5,
    stiffness: 500,
  });

  // { mass: 1.25, stiffness: 200, damping: 50 }
  return (
    <>
      <ScrollContainer ref={ref} style={{ y: spring }}>
        {children}
      </ScrollContainer>
      <NativeScroll style={{ height: height }} />
    </>
  );
};

export default ParallaxContent;
