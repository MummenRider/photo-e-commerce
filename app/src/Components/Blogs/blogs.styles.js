import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div``;
export const CardContainer = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    gap: min(2vw, 70px);
  }
`;
