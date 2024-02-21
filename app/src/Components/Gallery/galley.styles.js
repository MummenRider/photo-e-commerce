import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const GalleryContainer = styled.div`
  display: grid;
  gap: 0.5em;
  padding-bottom: min(25%, 6em);
  @media (min-width: 48em) {
    grid-template-columns: repeat(auto-fit, minmax(22vw, 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 20vw;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const GallerItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 48em) {
    position: relative;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    overflow:hidden;
  }
`;

export const GallerImage = styled(motion.img)`
  display: inline-block;
  height: auto;
  max-width: 100%;
 
  @media (min-width: 48em) {
    position: absolute;
    scale: 1.05;
  }
`;
