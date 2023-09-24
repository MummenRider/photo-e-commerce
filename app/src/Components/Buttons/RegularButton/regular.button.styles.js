import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonContainer = styled(motion.div)`
  padding-top: 2em;

  @media (min-width: 48em) {
    padding-top: 5%;
  }
`;

export const Button = styled.button`
  margin-inline: auto;
  background-color: ${(props) => props.bgColor};
  font-family: var(--ff-third);
  color: ${(props) => props.txtColor};
  font-size: clamp(0.7rem, 2vw, 2.5rem);
  border: none;
  cursor: pointer;
  padding-block: min(5vh, 1.5em);
  padding-inline: min(8vw, 4em);
  @media (min-width: 48em) {
    font-size: clamp(0.435rem, 0.6vw, 1.4rem);
  }
`;
