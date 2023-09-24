import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const TextContainer = styled.div``;

export const XSmall = styled(motion.p)`
  font-family: var(--ff-third);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: clamp(0.8rem, 1vw, 1rem);
  text-transform: uppercase;
  color: var(--bg-secondary);
  @media (min-width: 48em) {
    font-size: clamp(0.3rem, 0.7vw, 1.4rem);
  }
`;

export const Small = styled(motion.p)`
  font-family: var(--ff-third);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: clamp(1.25rem, 1.1vw, 1.25rem);
  text-transform: uppercase;
  color: var(--bg-secondary);
  @media (min-width: 48em) {
    font-size: clamp(0.4rem, 0.96vw, 1.8rem);
  }
`;

export const Regular = styled(motion.h4)`
  font-family: var(--ff-third);
  font-weight: 300;
  letter-spacing: 0.025rem;
  line-height: 1.8;
  font-size: clamp(0.938rem, 1.1vw, 1.25rem);
  padding-block: min(2vh, 5em);
  @media (min-width: 48em) {
    font-size: clamp(0.415rem, 0.8vw, 1.4rem);
  }
  @media (min-width: 67.5em) {
    line-height: 2;
  }
`;

export const Medium = styled(motion.h2)`
  font-family: var(--ff-secondary);
  letter-spacing: 0.025rem;
  font-size: clamp(2rem, 6vw, 2.875rem);
  color: var(--bg-secondary);
  font-weight: 600;
  line-height: 1;

  @media (min-width: 48em) {
    font-size: clamp(1rem, 2.1vw, 6.1rem);
  }

  @media (min-width: 84.875em) {
    font-size: clamp(1rem, 3vw, 6.1rem);
  }
`;

export const SemiLarge = styled(motion.h1)`
  font-family: "kazimirtext", sans-serif;
  color: var(--bg-secondary);
  font-weight: 300;
  line-height: 1em;
  font-size: clamp(3.75rem, 10.5vw, 5rem);

  @media (min-width: 48em) {
    font-size: clamp(2rem, 5.125vw, 10rem);
  }
`;

export const Large = styled(motion.h1)`
  font-family: mono45-headline, monospace;
  text-transform: uppercase;
  color: var(--bg-secondary);
  font-weight: 500;
  line-height: 1em;
  font-size: clamp(3.75rem, 10.5vw, 5rem);

  @media (min-width: 48em) {
    font-size: clamp(2rem, 5.125vw, 10rem);
  }
`;

export const ExtraLargeText = styled(motion.h1)`
  font-family: var(--ff-primary);
  text-transform: uppercase;
  color: #e1c48f;
  font-weight: bolder;
  line-height: 1em;
  font-size: clamp(2rem, 8.2vw, 15rem);
  text-align: end;
  @media (min-width: 48em) {
    bottom: 0px;
    right: 3%;
  }
`;

export const Button = styled(motion.button)`
  background: none;
  border: none;
  font-family: var(--ff-third);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: clamp(0.875rem, 1.1vw, 1.25rem);
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;

  @media (min-width: 48em) {
    font-size: clamp(0.4rem, 0.7vw, 1.2rem);
  }
`;
