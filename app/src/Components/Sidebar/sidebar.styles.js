import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const SideBarContainer = styled(motion.div)`
  height: 100vh;
  min-height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-primary);
  z-index: 99999;

`;

export const SideBarInner = styled.div`
  display: grid;
  padding: 0 2em;
  place-items: start center;
  gap: 2em;
  &::before {
    content: "";
    padding: 3em 1px;
    background: #313b41;
    grid-row: 1 / span 2;
    grid-column: 1;
    border-radius: 10px;
  }
`;

export const LogoContainer = styled(motion.div)`
  grid-row: 4;
  grid-column: 1;
  place-self: end center;
`;

export const CloseButtonContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  place-self: start center;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 1px 0;
  font-family: var(--ff-third);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #313b41;
`;

export const MenuItem = styled(Link)`
  place-self: center center;

  cursor: pointer;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding: 20% 0;
`;

export const SocialMediaItem = styled.a`
  cursor: pointer;

  svg {
    fill: var(--bg-secondary); // need to add this and not in svg
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  border-top: 1px solid #8b8f91;
  padding: 1.8em 0;
  border-radius: 1px;
  &:first-child {
    border-top: 1px solid #313b41;
  }

  &:last-child {
    border-bottom: 1px solid #313b41;
  }
`;
