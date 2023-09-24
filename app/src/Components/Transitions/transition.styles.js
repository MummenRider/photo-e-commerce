import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled(motion.div)``;

export const FirstMount = styled(motion.div)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background-color: var(--bg-primary);
  /* -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100%;
`;
