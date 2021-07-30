import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 2rem 0;
  top: 0;
  background-color: ${(prop) => (!prop.isScrolled ? "transparent" : "#353535")};
  font-family: "Montserrat", sans-serif;
  min-height: 96.9px;
  width: 100%;
  z-index: 999;
  transition: background-color 200ms ease-in;
  box-shadow: ${(prop) => (!prop.isScrolled ? "none" : "0px 2px 20px#1a1a1a")};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;
export const Logo = styled(Link)`
  cursor: pointer;
  color: white;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  padding-left: 10rem;

  @media screen and (max-width: 768px) {
    padding-left: 3rem;
  }
`;
export const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding-right: 10rem;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    padding-right: 3rem;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  position: relative;
  width: 40rem;
  align-items: center;
  margin-right: 15rem;

  @media screen and (max-width: 900px) {
    margin-right: 5rem;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (!isOpen ? "300px" : "0px")};
    transition: max-height 300ms ease-in;
    background-color: #353535;
    margin-top: 10px;
    padding-right: 0;
  }
`;
export const Item = styled(Link)`
  color: #ffffff;
  font-size: 1.8rem;
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
