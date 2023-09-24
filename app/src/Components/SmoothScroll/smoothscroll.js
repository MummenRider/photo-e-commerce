import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useWindowSize from "Hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.08,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }} // Initial animation values
      animate={{ opacity: 1 }} // Animation on mount
      exit={{ opacity: 0 }} // Animation on unmount
    >
      <motion.div
        ref={scrollingContainerRef}
        initial={{ opacity: 0, translateY: 0 }} // Initial animation values
        animate={{ opacity: 1, translateY: -data.previous }} // Animation on mount and scroll
        transition={{ duration: 2 }} // Transition duration
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SmoothScroll;
