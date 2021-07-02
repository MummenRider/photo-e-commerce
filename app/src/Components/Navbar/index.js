import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink } from "./navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Nav>
        <Logo to="/">
          <h3>LOGO</h3>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/about">ABOUT</MenuLink>
          <MenuLink to="/services">SERVICES</MenuLink>
          <MenuLink to="/contact">CONTACT</MenuLink>
        </Menu>
      </Nav>
    </header>
  );
};

export default Navbar;
