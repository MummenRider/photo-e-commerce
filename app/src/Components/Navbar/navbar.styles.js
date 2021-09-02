import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: ${(prop) => (!prop.isScrolled ? "transparent" : "#111112")};
  font-family: "Montserrat", sans-serif;
  width: 100%;
  z-index: 999;
  transition: background-color 200ms ease-in;
  box-shadow: ${(prop) =>
    !prop.isScrolled ? "none" : "0px 2px 20px #131313cc"};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
`;
export const Logo = styled(Link)`
  cursor: pointer;
  color: white;
  font-size: clamp(1.8rem, 0.8vw, 6rem);
  font-weight: 400;
  text-decoration: none;
  text-align: center;
`;

export const Button = styled(motion.button)`
  background-color: white;
  border: none;
  padding: 1%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuSide = styled(motion.nav)`
  position: absolute;
  top: 100%;
  right: 0;
  height: 50vh;
  width: 100%;
  background-color: #111112;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  position: relative;
  width: 25%;
  min-width: 320px;
  align-items: center;
`;
export const Item = styled(Link)`
  color: #ffffff;
  font-size: clamp(1.4rem, 0.8vw, 6rem);
  font-weight: 100;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-align: center;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 0.019rem solid white;
    bottom: 0;
    left: 0;
    width: 100%;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 250ms ease-in;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0rem;
    &:hover::after {
      transform: scaleX(0);
    }
  }
`;
