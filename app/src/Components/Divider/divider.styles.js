import { motion } from "framer-motion";
import styled from "styled-components";

export const Frame = styled.section`
  width: 100%;
  background-color: ${(props) => props.bkgColor};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  color: ${(props) => props.color};
  position: relative;
`;
export const Inner = styled(motion.div)`
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: clamp(3.5rem, ${(props) => props.size}, 20rem);
  font-family: broadacre-thin-1, sans-serif;
  font-weight: 100;
  font-style: normal;
  font-weight: lighter;
  line-height: 1.5;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  font-family: var(--ff-primary);
  font-size: clamp(1.2rem, 0.8vw, 15rem);
  letter-spacing: 4px;
  font-weight: 400;
  padding: 2rem 0;
`;

export const TextFrame = styled.div``;
export const SVGFrame = styled(motion.div)`
  path {
    fill: black;
  }
`;

export const ImageFrame = styled(motion.img)`
  height: 20vh;
  width: auto;

  @media screen and (min-width: 1030px) {
    height: 30vh;
  }
`;
