import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 5%;
`;

export const CardImage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
`;

export const CardBody = styled.div`
  grid-column: 2 / 12;
  grid-row: 1;
  place-self: start center;
  padding-top: 60%;
`;

export const CardInner = styled(motion.div)`
  background-color: white;
  padding: 6%;
`;

export const CardDescription = styled(motion.p)``;
