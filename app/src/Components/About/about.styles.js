import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled.section`
  background: var(--bg-primary);
  padding: 3.125em 1em;
  @media (min-width: 48em) {
    padding: 0em 0em;
  }
`;

export const Frame = styled.div`
  display: grid;
  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
    place-items: center;
    margin-inline: auto;
    position: relative;
    z-index: 1000;
  }
`;

export const One = styled.div`
  font-size: min(50vw, 900px);
  position: absolute;
  opacity: 0.03;
  z-index: -100;
  line-height: 1;
  left: -0.6em;
  top: -0.2em;
`;

export const Two = styled.div`
  font-size: min(28vw, 700px);
  position: absolute;
  opacity: 0.03;
  z-index: -100;
  line-height: 1;
  right: -1em;
  bottom: -0.225em;
`;

export const Content = styled(motion.div)`
  padding: 0 1em;
  @media (min-width: 48em) {
    grid-column: 2 / span 7;
    grid-row: 1;
    padding: 0;
    z-index: 1;
    display: grid;
    place-items: start;
    place-self: center start;
    grid-auto-flow: row;
  }
`;

export const SubTitle = styled(motion.p)`
  font-family: var(--ff-seventh);
  font-size: clamp(0.75rem, 0.9vw, 0.938rem);
  padding-top: 3.75em;
  padding-bottom: 2em;
  opacity: 0.8;
  font-weight: light;
  letter-spacing: 0.1em;

  opacity: 0.8;
  @media (min-width: 48em) {
    font-family: var(--ff-third);
    font-size: clamp(0.5rem, 0.9vw, 5rem);
  }
`;

export const FrameTitle = styled(motion.div)`
  display: grid;
  place-items: start;
`;

export const Title = styled(motion.p)`
  font-family: var(--ff-secondary);
  font-size: clamp(2.5rem, 3.125vw, 3.125rem);
  font-weight: 500;
  line-height: 1.1;

  @media (min-width: 48em) {
    font-size: clamp(1.5rem, 3.5vw, 40rem);
    margin: 0.05em 0;
    padding: 0 0.5em;
    background: white;
  }
`;

export const FrameDescription = styled(motion.div)`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const Description = styled.p`
  padding: 1.25em 0;
  font-family: var(--ff-third);
  font-weight: lighter;
  line-height: 2;
  letter-spacing: 0.02rem;
  font-size: clamp(1.125rem, 1.1vw, 1.25rem);

  @media (min-width: 48em) {
    font-size: clamp(0.6rem, 1vw, 6rem);
    grid-column: 1 / span 5;
  }
`;

export const BottonContainer = styled.div`
  padding-top: 1.25em;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ImageOne = styled(motion.div)`
  grid-row: 1;

  @media (min-width: 48em) {
    grid-column: 5 / -1;
  }
`;
