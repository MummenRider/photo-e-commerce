import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
`;

export const ItemContainer = styled(motion.div)`
  grid-column: 1 / -1;
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-row: 1;
  }
`;

export const SmallTitleContainer = styled.div`
  padding-bottom: 1.5em;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1;

  @media (min-width: 48em) {
    grid-column: 14 / 23;
    text-align: start;
    padding-top: 14%;
  }
`;

export const ImageFrame = styled.div`
  grid-column: 1 / -1;
  padding-bottom: 15%;

  @media (min-width: 48em) {
    padding-bottom: unset;
    grid-column: 1 / 13;
    grid-row: 1;
  }

  @media (min-width: 3054px) {
    place-self: end;
    grid-column: 2 / 13;
  }
`;

export const TextContent = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 48em) {
    grid-column: 14 / 25;
    grid-row: 1;
    padding-top: 22%;
  }

  @media (min-width: 3054px) {
    grid-column: 14 / 23;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 1em;
  display: flex;
  gap: 2em;
  z-index: 20;
  @media (min-width: 48em) {
    grid-column: 14 / 23;
    grid-row: 1;
    place-self: end start;
    padding-bottom: 10%;
  }
`;

export const PreviousButton = styled.div``;

export const NextButton = styled.div``;
