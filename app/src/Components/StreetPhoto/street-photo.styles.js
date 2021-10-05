import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Container = styled(motion.section)`
  width: 100%;
  height: 200vh;
  text-align: center;
  padding-top: 1000px;
`;
export const ColumnOne = styled(motion.div)`
  border: 1px solid red;
  position: relative;
`;
export const ColumnTwo = styled(motion.div)`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColumnThree = styled(motion.div)`
  border: 1px solid blue;
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
`;

export const SubTitle = styled.span`
  font-family: var(--ff-primary);
  font-weight: lighter;
  font-size: clamp(1.3rem, 0.93vw, 6rem);
  letter-spacing: 2px;
`;

export const ImageBlockOne = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 125.8%;
  width: 90%;
  position: absolute;
`;

// export const ImageBlockTwo = styled.div`
//   position: absolute;
//   height: 18%;
//   width: fit-content;
//   top: 50px;
//   right: 100px;

//   @media screen and (max-width: 1375px) {
//     height: 16%;
//   }

//   @media screen and (max-width: 1230px) {
//     height: 14%;
//   }

//   @media screen and (max-width: 1130px) {
//     height: 12%;
//   }
// `;
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
