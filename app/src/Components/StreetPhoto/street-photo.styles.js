import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  width: 100%;
  height: 200vh;
  min-height: 1938px;
  text-align: center;
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterBlock = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  position: relative;
`;

export const TextContainer = styled(motion.div)`
  text-align: center;
  color: white;
  min-width: 30rem;
  z-index: 5;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(2.5rem, 2.5vw, 17rem);
  font-weight: 200;
  line-height: 1.5;
  padding: 10% 0;
`;

export const SubTitle = styled.span`
  font-family: var(--ff-primary);
  font-weight: lighter;
  font-size: clamp(1.3rem, 0.93vw, 6rem);
  letter-spacing: 2px;
`;

export const ImageFrameOne = styled(motion.div)`
  position: absolute;
  width: 20vw;
  top: -220%;
  left: -45%;
`;

export const ImageFrameTwo = styled(motion.div)`
  position: absolute;
  width: 20vw;
  top: -120%;
  right: -45%;
`;

export const ImageFrameThree = styled(motion.div)`
  position: absolute;
  width: 35vw;
  bottom: -190%;
  left: -45%;
`;

export const ImageFrameFour = styled(motion.div)`
  position: absolute;
  width: 20vw;
  bottom: -190%;
  right: -45%;
`;

export const Image = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: ${(props) => props.padTop};
  width: 100%;
`;

// export const ImageBlockThree = styled.div`
//   position: absolute;
//   width: fit-content;
//   height: 18%;
//   bottom: 200px;
//   left: 100px;

//   @media screen and (max-width: 1375px) {
//     height: 16%;
//   }

//   @media screen and (max-width: 1230px) {
//     height: 14%;
//     bottom: 300px;
//   }

//   @media screen and (max-width: 1130px) {
//     height: 12%;
//     bottom: 400px;
//   }
// `;
// export const ImageBlockFour = styled.div`
//   position: absolute;
//   width: fit-content;
//   height: 24%;
//   bottom: 300px;
//   right: 100px;

//   @media screen and (max-width: 1375px) {
//     height: 22%;
//   }

//   @media screen and (max-width: 1230px) {
//     height: 20%;
//     bottom: 420px;
//   }

//   @media screen and (max-width: 1130px) {
//     height: 18%;
//   }
// `;

export const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 1em;
  background-color: #f9f07e;
  margin-left: auto;
  margin-right: auto;
`;
