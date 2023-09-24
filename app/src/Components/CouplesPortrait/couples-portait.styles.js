import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (min-width: 48em) {
    grid-template-columns: repeat(24, 1fr);
  }
`;

export const ImageOne = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  @media (min-width: 48em) {
    grid-column: 1 / span 15;
  }
  @media (min-width: 1080px) {
  }
`;

export const ImageTwo = styled.div`
  grid-column: 9 / span 3;
  grid-row: 1;

  @media (min-width: 48em) {
    grid-column: 19 / 24;
    padding-top: 90%;
  }
`;

export const TextContainer = styled.div`
  grid-row: 3;
  grid-column: 3 / 11;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: min(25%, 4.375em);
  @media (min-width: 48em) {
    grid-row: 1;
    grid-column: 12 / 18;
    place-self: end end;
    background-color: var(--bg-secondary);
    padding: min(2vw, 4em);
    color: white;
    max-width: unset;
    gap: min(1.2vw, 3em);
  }

  @media (min-width: 79.375em) {
    grid-column: 12 / 18;
  }
`;

export const TextButton = styled.p`
  font-family: var(--ff-third);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: clamp(1rem, 1.1vw, 1.25rem);
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;

  @media (min-width: 48em) {
    font-size: clamp(0.4rem, 0.8vw, 1.6rem);
  }
`;

export const Title = styled.div`
  padding-block: 10% 5%;
  grid-row: 2;
  grid-column: 3 / 12;
  @media (min-width: 48em) {
    grid-row: 1;
    grid-column: 17 / 24;
    place-self: start;
  }
`;
