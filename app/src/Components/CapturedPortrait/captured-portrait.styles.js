import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
`;
export const Block = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Left = styled.div`
  height: auto;
  width: 100%;
  background-color: ${(props) => props.bkg};
  color: ${(props) => props.fontColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
export const SubTitle = styled.span`
  font-family: var(--ff-primary);
  font-size: clamp(1.2rem, 1.2vw, 8rem);
  font-weight: 100;
  padding: 4em 0;
`;
export const MainTitle = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(2.2rem, 2.5vw, 16rem);
  font-weight: lighter;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;
  padding: 0 1em;
  width: 80%;
  @media screen and (min-width: 1024px) {
    padding: 0 3em;
    width: 100%;
  }
`;
export const Right = styled(motion.div)`
  height: auto;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
