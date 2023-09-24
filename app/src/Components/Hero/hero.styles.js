import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled(motion.section)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 160px 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(49, 59, 65, 0.8);
    z-index: 1;
  }

  @media only screen and (min-width: 768px) {
    padding: 230px 0;
  }
`;

export const VideoBackground = styled(motion.video)`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: 1; /* Set z-index to 0 to allow the ::before pseudo-element to be displayed on top */
  display: block;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const VideoContent = styled.source``;
export const Content = styled(motion.div)`
  height: min(80vw, 30em);
  width: min(80vw, 30em);
  z-index: 2;
`;
