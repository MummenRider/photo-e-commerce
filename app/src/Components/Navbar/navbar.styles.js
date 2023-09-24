import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled(motion.header)`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Inner = styled(motion.div)`
  display: grid;
  padding: 2em;
  margin-inline: auto;
  width: 100%;
  @media (min-width: 48em) {
    padding: 2em 0;
  }
`;

export const LogoContainer = styled.div`
  place-self: center;
  grid-row: 1;
  grid-column: 1;

  svg {
    fill: "pink";
  }
  @media (min-width: 48em) {
    place-self: center start;
  }
`;

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-inline: auto;

  @media (min-width: 1046px) {
    width: min(60vw, 1420px);
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 4em;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  gap: 4em;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;

export const MenuItem = styled(Link)`
  font-family: var(--ff-third);
  letter-spacing: 0.08em;
  font-size: 1.125rem;
  font-weight: light;
  padding-top: 1em;
  cursor: pointer;

  @media (min-width: 48em) {
    font-size: clamp(0.75rem, 0.95vw, 1.4rem);
  }
`;

export const Image = styled.img``;

export const SocialMediaList = styled.ul``;

export const SocialMediaItem = styled.a``;

export const BurgerIcon = styled.div`
  cursor: pointer;
  place-self: center end;
  grid-row: 1;
  grid-column: 1;
  width: 2em;
  height: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BurgerContainer = styled.div``;
export const BurgerLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  &:nth-child(1) {
    place-self: start center;
  }
  &:nth-child(2) {
    place-self: end center;
  }
`;

export const SideBarContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-primary);
  z-index: 500;
`;

// import { NavLink as Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export const Header = styled(motion.header)``;
// export const Container = styled.div``;
// export const Logo = styled(Link)``;

// export const Button = styled(motion.button)``;

// export const MenuSide = styled(motion.nav)``;
// export const Menu = styled.nav``;
// export const Item = styled(Link)``;
