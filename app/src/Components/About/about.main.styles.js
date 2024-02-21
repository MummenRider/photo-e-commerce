import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const AboutContainer = styled(motion.section)`
  background: var(--bg-primary);
  padding: 2em 0em;
  color: var(--bg-secondary);
  padding-block: 160px;
  overflow-x: hidden;
  @media (min-width: 48em) {
    padding-block: 260px;
  }
`;

export const HeroStack = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 1em;
  @media (min-width: 48em) {
    padding: unset;
  }
`;
export const ImageOne = styled(motion.div)`
  grid-column: 1 / span 7;
  grid-row: 1;

  @media (min-width: 48em) {
    grid-column: 2 / span 3;
  }
`;
export const ImageTwo = styled(motion.div)`
  grid-column: 8 / 12;
  grid-row: 1;
  padding-top: 25%;
  position: relative;
`;
export const AboutTitle = styled(motion.div)`
  position: absolute;
  display: block;
  font-family: var(--ff-fourth);
  font-weight: bolder;
  color: #ece4d9;
  opacity: 0.6;
  font-size: 11vw;
  letter-spacing: 0.025rem;
  top: -8%;
`;

export const ImageDivider = styled.div`
  padding: 10% 0;

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const ImageThree = styled.div`
  grid-column: 1 / -1;
`;

export const ImageFourContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 48em) {
    grid-template-columns: repeat(24, 1fr);
  }
`;

export const ImageFour = styled.div`
  grid-column: 3 / span 8;
  @media (min-width: 48em) {
    grid-column: 6 / 14;
    grid-row: 1;
  }
`;

export const ImageFive = styled.div`
  grid-column: 3 / span 8;
  @media (min-width: 48em) {
    grid-column: 12 / 20;
    grid-row: 1;
  }
`;

export const ImageFiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 48em) {
    grid-template-columns: repeat(24, 1fr);
  }
`;

export const TextContent = styled.div`
  grid-column: ${(props) => props.subTitle.gridColumn};
  grid-row: ${(props) => props.subTitle.gridRow};

  h1 {
    padding-top: 1em;
    font-family: var(--ff-secondary);
    font-weight: 500;
    font-size: clamp(2.5rem, 3.125vw, 3.125rem);
    line-height: 1.2;
  }

  @media (min-width: 48em) {
    grid-column: ${(props) => props.subTitle.gridColumnB};
    grid-row: 1;
    padding-top: 20%;
    place-self: start end;
    text-align: ${(props) => props.subTitle.textAlign};
    padding-right: ${(props) => props.subTitle.paddingRight}%;
    h1 {
      padding-top: unset;
      display: inline; /* keep the background color wrapped tight */
      background-color: white;
      color: var(--bg-secondary);
      padding: 1vw;
      line-height: 1.6;
      font-size: clamp(2rem, 3.4vw, 8rem);
    }
  }
`;

export const ImageDescription = styled.p`
  grid-column: ${(props) => props.desc.gridColumn};
  grid-row: ${(props) => props.desc.gridRow};
  font-family: var(--ff-third);
  letter-spacing: 0.025rem;
  font-weight: 400;
  font-size: clamp(0.938rem, 2.5vw, 1.125rem);
  line-height: 1.5;
  padding: 1em 0;

  @media (min-width: 48em) {
    grid-column: ${(props) => props.desc.gridColumnB};
    grid-row: 2;
    font-size: clamp(0.75rem, 0.95vw, 1.8rem);

    text-align: start;
    line-height: 2;
    padding-top: 2em;
    padding-right: ${(props) => props.desc.paddingR}%;
    padding-left: ${(props) => props.desc.paddingL}%;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;
export const SmallQuote = styled.h4`
  font-family: var(--ff-third);
  letter-spacing: 0.025rem;
  font-size: clamp(0.938rem, 2.5vw, 1.125rem);
  line-height: 1.5;
  font-weight: 400;
  padding: 1em;
  max-width: 300px;
  text-align: start;
  @media (min-width: 48em) {
    font-size: clamp(0.75rem, 0.95vw, 1.8rem);
    line-height: 2;
    place-self: end;
    text-align: end;
    max-width: max(30vw, 500px);
    padding: 1em 0em 0em 0em;
    grid-column: 7 / 12;
  }
`;
export const MidQuote = styled(motion.div)`
  grid-column: 8 / -1;
  grid-row: 1;
  font-family: var(--ff-secondary);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.125rem, 4.6vw, 2.25rem);
  line-height: 1.2;
  padding-left: 1.25em;
  position: relative;
  padding-top: 50%;
  height: fit-content;

  &::before {
    content: "\\201C";
    padding-top: 50%;
    display: block;
    font-size: clamp(2.5rem, 10.5vw, 5rem);
    position: absolute;
    font-weight: bolder;
    left: 4%;
    top: -12%;
    color: #e1c48f;
  }

  @media (min-width: 48em) {
    font-size: clamp(0.95rem, 1.8vw, 3.75rem);
    grid-column: 5 / 8;
    padding-left: 2em;
    padding-right: 1em;
    line-height: 1.45;
    &::before {
      font-size: clamp(2.5rem, 6vw, 12.5rem);
    }
  }
`;
export const LargeQuote = styled.div`
  h1 {
    font-family: var(--ff-secondary);
    text-transform: uppercase;
    font-weight: 500;
    font-style: italic;
    font-size: clamp(2.5rem, 3.125vw, 3.125rem);
    padding: 1.5em 0.5em;
  }

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    h1 {
      grid-column: 3/11;
      font-size: clamp(3rem, 4.8vw, 10rem);
    }
  }
`;

export const Description = styled(motion.div)`
  grid-column: 4 / -1;
  grid-row: 1;
  padding-top: 90%;
  /* z-index: 300; */
  p {
    background: var(--bg-primary);
    padding: 1em;
    font-family: var(--ff-third);
    letter-spacing: 0.025rem;
    font-weight: 400;
    font-size: clamp(0.938rem, 2.5vw, 1.125rem);
    line-height: 1.5;
  }

  @media (min-width: 48em) {
    grid-column: 4 / 8;
    height: fit-content;
    padding-top: 80%;
    padding-left: 8%;

    p {
      font-size: clamp(0.75rem, 0.95vw, 1.8rem);
      padding: 3.125em;
      line-height: 2;
    }
  }
`;
