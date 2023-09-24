import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  @media (min-width: 48em) {
    grid-template-columns: repeat(24, 1fr);
  }
`;

export const ImageOne = styled.div`
  grid-column: 1 / 7;
  grid-row: 1;
  z-index: 1;

  padding-bottom: 70%;

  @media (min-width: 48em) {
    grid-column: 1 / 10;
    padding-bottom: unset;
    place-self: start;
    padding-top: 20%;
  }
`;
export const ImageTwo = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  z-index: -1;
  @media (min-width: 48em) {
    grid-column: 9 / 20;
  }
`;

export const Frame = styled.div`
  width: 100%;
  position: relative;
  height: 48vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    object-position: center center;
  }
`;

export const Image = styled.img``;

export const ImageThree = styled.div`
  grid-column: 19 / -1;
  grid-row: 1;
  padding-top: 30%;

  @media (min-width: 48em) {
    grid-column: 19 / 23;
    padding-top: 122%;
  }
`;

export const Content = styled.div`
  grid-column: 2 / 24;
  place-self: center;
  display: grid;
  padding-top: 3em;

  @media (min-width: 402px) {
  }
  @media (min-width: 48em) {
    grid-column: 3 / 8;
    grid-row: 1;
    place-self: start;
    place-items: start;
    padding-top: 146%;
  }
`;

export const ExtraLargeText = styled(motion.h1)`
  font-family: var(--ff-third);
  text-transform: uppercase;
  color: var(--bg-secondary);
  font-weight: bolder;
  line-height: -10px;
  z-index: 100;
  position: absolute;
  bottom: -2em;
`;

export const ImageStack = styled.div``;

export const ContentInner = styled.div``;

export const ImageOneFrame = styled.div``;

export const ImageThreeFrame = styled(motion.div)``;

export const ImageFour = styled.div``;

export const TitleContainer = styled.div``;

export const Title = styled.p``;

export const Description = styled(motion.p)``;
