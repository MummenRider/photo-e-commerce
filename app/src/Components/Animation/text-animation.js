import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextAnimation = ({
  amount = 1,
  animateDirection = "x",
  once = true,
  children,
  reverse = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    amount: amount,
  });
  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
      x: animateDirection === "x" ? (isInView ? 0 : !reverse ? 20 : -20) : 0,
      y: animateDirection === "y" ? (isInView ? 0 : !reverse ? 10 : -10) : 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <motion.div ref={ref} variants={variant} initial="hidden" animate="show" style={{zIndex: 1, position:"relative"}}>
      {children}
    </motion.div>
  );
};

export default TextAnimation;
