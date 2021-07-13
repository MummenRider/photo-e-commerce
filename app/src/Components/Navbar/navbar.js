import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { Nav, Logo, Hamburger, Menu, MenuLink, Header } from "./navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <InView as="div" onChange={setIsScrolled}>
      <Header isScrolled={isScrolled}>
        <Nav data-testid="nav">
          <Logo data-testid="logo" to="/">
            <h3>LOGO</h3>
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <MenuLink to="/about" data-testid="about">
              ABOUT
            </MenuLink>
            <MenuLink to="/services">SERVICES</MenuLink>
            <MenuLink to="/contact">CONTACT</MenuLink>
          </Menu>
        </Nav>
      </Header>
    </InView>
  );
};

export default Navbar;
