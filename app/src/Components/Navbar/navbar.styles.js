import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 3rem 0rem;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Logo = styled(Link)`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    padding-right: 4rem;
    padding-bottom: 2rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  position: relative;
  width: 40rem;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 300ms ease-in;
    background-color: #353535;
  }
`;

export const MenuLink = styled(Link)`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 100;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-align: center;
  position: relative;

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

  @media (max-width: 768px) {
    padding: 2rem 0rem;

    &:hover::after {
      transform: scaleX(0);
    }
  }
`;
