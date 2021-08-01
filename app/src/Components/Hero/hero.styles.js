import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  height: 100vh;
  min-height: 500px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ImageFrame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

export const Text = styled(motion.span)`
  font-family: lust-sans, sans-serif;
  font-size: clamp(30px, 5vw, 80px);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
  padding: 10px 0;
`;
export const TextContainer = styled.h1`
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
