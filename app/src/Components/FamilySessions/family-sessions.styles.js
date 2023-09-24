import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Outer = styled.section``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (min-width: 48em) {
    grid-template-columns: repeat(24, 1fr);
  }
`;

export const CircleBG = styled(motion.div)`
  grid-column: 1 / -1;
  place-self: center center;
  background: #fbf6ef;
  width: 100%;
  height: min(50vw, 50em);
  clip-path: circle(34% at 50% 50%);
  grid-row: 1;
  z-index: 0;

  @media (min-width: 1580px) {
    height: min(50vw, 100em);
  }

  @media (min-width: 2585px) {
    height: 50vw;
    clip-path: circle(34% at 50% 50%);
  }
`;

export const ImageStack = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  z-index: 1;
  @media (min-width: 48em) {
    grid-row: 1;
    grid-column: 1 / span 9;
    place-self: center;
  }
`;

export const ImageOne = styled(motion.div)`
  grid-column: 1 / span 16;
  grid-row: 1;

  @media (min-width: 48em) {
    grid-column: 1 / -1;
    padding-top: 30%;
  }
`;

export const ImageTwo = styled(motion.div)`
  grid-column: 16 / -1;
  grid-row: 1;
  padding-top: 50%;

  @media (min-width: 48em) {
    grid-column: 16 / -1;
    padding-top: unset;
  }
`;

export const ImageThree = styled(motion.div)`
  grid-row: 1;
  grid-column: 18 / -1;
  place-self: center;
  z-index: 1;
`;

export const Content = styled(motion.div)`
  grid-column: 1 / -1;
  padding-top: 2em;
  h4 {
    width: min(80vw, 34em);
  }
  @media (min-width: 48em) {
    grid-column: 11 / 17;
    grid-row: 1;
    place-self: center center;
    z-index: 1;
    h4 {
      width: unset;
    }
  }

  /* @media (min-width: 3000px) {
    padding-top: min(146%, 56em);
  } */
`;

export const ButtonContainer = styled.div`
  padding-top: 2em;

  @media (min-width: 48em) {
    padding-top: 5%;
  }
`;

export const ImageThreeFrame = styled.div`
  grid-row: 2;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  place-content: start;

  @media (min-width: 48em) {
    grid-row: 1;
    grid-column: 1 / span 2;
    grid-column: 9 / -1;

    padding-top: 70%;
  }
`;

export const ImageFour = styled.div`
  grid-column: 10 / -1;
  grid-row: 1;
  align-self: end;
  padding-left: 1em;
  svg {
    display: block;
    width: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const TextQuoteOne = styled(motion.p)`
  font-family: var(--ff-secondary);
  font-weight: lighter;
  font-size: clamp(2.25rem, 10vw, 4rem);
  color: var(--bg-secondary);
  grid-row: 1;
  grid-column: 2;
  @media (min-width: 48em) {
    grid-column: 2 / span 5;
    line-height: 1;
    font-size: clamp(2.2rem, 5.5vw, 10rem);
    padding-top: 10%;
  }
`;

export const TextQuoteTwo = styled(motion.p)`
  font-family: var(--ff-secondary);
  font-weight: lighter;
  font-size: clamp(2.25rem, 10vw, 4rem);
  color: var(--bg-secondary);
  grid-column: 2;
  grid-row: 1;
  place-self: end;
  @media (min-width: 48em) {
    grid-column: 9 / 12;
    grid-row: 1;
    place-self: start end;
    padding-top: 20%;
    font-size: clamp(2.2rem, 5.5vw, 10rem);
  }

  @media (min-width: 1300px) {
    padding-top: 60%;
  }
`;

export const TextQuoteThree = styled(motion.p)`
  font-family: var(--ff-secondary);
  font-weight: lighter;
  font-size: clamp(2.25rem, 10vw, 4rem);
  color: var(--bg-secondary);
  grid-column: 3;
  grid-row: 2;
  padding-left: 0.5em;
  align-self: center;
  @media (min-width: 48em) {
    grid-column: 7 / span 2;
    grid-row: 1;
    font-size: clamp(2.2rem, 5.5vw, 10rem);
    align-self: start;
    padding-top: 180%;
  }
`;

export const Title = styled.p`
  font-family: var(--ff-secondary);
  font-weight: lighter;
  font-size: 4.2rem;
  letter-spacing: -0.02em;
  @media (min-width: 48em) {
    font-size: clamp(2.2rem, 5vw, 8rem);
    letter-spacing: -0.02em;
  }
`;

export const Description = styled.p`
  font-family: var(--ff-third);
  letter-spacing: 0.02rem;
  font-size: clamp(1.125rem, 1.1vw, 1.25rem);
  font-weight: 300;
  line-height: 1.5;
  max-width: 26em;
  padding-bottom: 1em;
  @media (min-width: 48em) {
    font-size: clamp(0.75rem, 0.95vw, 1.8rem);
  }
`;
