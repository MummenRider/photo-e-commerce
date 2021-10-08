import { motion } from "framer-motion";
import styled from "styled-components";

export const Frame = styled.section`
  width: 100%;
  background-color: #f2eded;
  height: 120vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10% 0;
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
