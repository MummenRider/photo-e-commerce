import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 100%;
  min-height: 150vh;
  font-family: "Montserrat", sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10%;
    padding: 0 10%;
    min-height: 120vh;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  padding: 5vh 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const Inner = styled.div``;

export const Frames = styled(motion.div)`
  width: 100vw;
`;

export const ImageOne = styled(motion.div)`
  position: relative;
  width: 60vw;

  @media screen and (min-width: 768px) {
    width: 26vw;
  }
`;
export const ImageTwo = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 60vw;
  @media screen and (min-width: 768px) {
    width: 26vw;
  }
`;

export const Image = styled(motion.div)`
  background-image: url(${(props) => props.src});
  width: ${(props) => props.width};
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: ${(props) => props.padTop};
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 6rem 0;
  }
`;
export const Title = styled.h3`
  font-size: clamp(4rem, 5vw, 36rem);
  text-align: center;
  font-weight: 300;
  padding: 10rem 0;
  text-align: center;

  @media screen and (min-width: 1300px) {
    text-align: left;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1.3rem, 0.9vw, 6rem);
  font-weight: 100;
  line-height: 1.8;
  text-align: justify;
`;
