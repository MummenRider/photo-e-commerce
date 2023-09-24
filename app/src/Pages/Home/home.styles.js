import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Feature = styled.article`
  display: grid;
  place-items: center stretch;
  padding: 4em 0;
`;

export const Inner = styled.div`
  font-family: var(--ff-third);
  color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-around;
    margin-inline: auto;
    gap: min(5vw, 5em);
  }
`;

export const Title = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.09em;
  font-weight: 500;
  @media (min-width: 48em) {
    font-size: clamp(0.7rem, 0.5vw, 3.4rem);
  }
`;
export const Divider = styled.div`
  width: 3em;
  margin-top: 1em;
  margin-bottom: 4em;
  border: 1px solid var(--bg-secondary);
  @media (min-width: 48em) {
    height: 12vh;
    width: 0.04vw;
    margin: unset;
  }
`;
export const Item = styled.p`
  font-weight: 900;
  font-size: clamp(1.6rem, 1.6vw, 3rem);
  line-height: 1em;
  padding: 0.8em 0;
`;

export const QuoteContainer = styled(motion.article)`
  display: grid;
  text-align: end;
  place-items: end;
  padding-right: 1em;
  padding-top: min(6vh, 6em);
  padding-bottom: min(8vh, 8em);
  color: var(--bg-secondary);
  @media (min-width: 48em) {
    padding-right: 2em;
  }

  @media (min-width: 106em) {
    padding-top: min(10vh, 10em);
    padding-bottom: min(20vh, 20em);
  }
`;

export const Quote = styled(motion.p)`
  font-family: var(--ff-secondary);
  font-weight: 500;
  font-size: clamp(2rem, 3.5vw, 6rem);
  line-height: 1.4;
  width: min(80vw, 23em);
`;

export const Author = styled(motion.p)`
  font-family: var(--ff-third);
  font-size: clamp(0.75rem, 0.9vw, 1.4rem);
  letter-spacing: 0.06em;
  font-weight: 500;
  opacity: 0.8;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 70vh;

  @media (min-width: 106em) {
    height: min(70vh, 60em);
  }

  @media (min-width: 156em) {
    height: min(80vh, 80em);
  }
`;

export const Image = styled(motion.div)`
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
`;
export const ServicesContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: var(--bg-primary);
  text-align: center;
  display: grid;
  width: 100%;
`;

export const ServicesSubTitle = styled(motion.p)`
  font-family: var(--ff-third);
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  font-weight: 500;
  @media (min-width: 48em) {
    font-size: clamp(0.8rem, 0.8vw, 5rem);
  }
`;

export const ServicesTitle = styled(motion.p)`
  font-size: 4.2rem;
  font-family: var(--ff-secondary);
  font-weight: lighter;
  @media (min-width: 48em) {
    font-size: clamp(3.5rem, 4.8vw, 40rem);
  }
`;

export const ServicesDescription = styled(motion.p)`
  letter-spacing: 0.02rem;
  font-size: clamp(1.125rem, 1.1vw, 1.8rem);
  font-family: var(--ff-third);
  font-weight: 300;
  max-width: 32em;
  line-height: 1.5;
  margin-inline: auto;
  padding-top: 1em;
  @media (min-width: 48em) {
    font-size: clamp(0.75rem, 0.95vw, 1.8rem);
  }
`;
export const XLTextsFrame = styled(motion.div)`
  position: absolute;
  border: 1px solid red;

  z-index: 1000;
  right: 3%;
  bottom: 0px;
`;

export const XLTextOne = styled(motion.div)``;
export const XLTextTwo = styled(motion.div)``;
export const XLTextThree = styled(motion.div)``;
