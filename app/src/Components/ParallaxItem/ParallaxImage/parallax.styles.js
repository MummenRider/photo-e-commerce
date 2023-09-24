import { motion } from "framer-motion";
import styled from "styled-components";

export const ImageContainer = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    background-color: #313b41;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
  }
`;
