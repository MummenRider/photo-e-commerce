import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Header,
  Logo,
  Burger,
  Menu,
  Item,
} from "Components/Navbar/navbar.styles";
import useScroll from "Hooks/useScroll";

const ToggleMenuContext = createContext();

export default function Navbar({ children, ...restProps }) {
  const { isScrolled } = useScroll(false);

  return (
    <Header isScrolled={isScrolled} data-testid="nav-background" {...restProps}>
      {children}
    </Header>
  );
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  const [toggleMenu, setToggleMenu] = useState(ToggleMenuContext);
  return (
    <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      <Container {...restProps}>{children}</Container>
    </ToggleMenuContext.Provider>
  );
};

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Navbar.Burger = function NavbarBurger({ children, ...restProps }) {
  const { toggleMenu, setToggleMenu } = useContext(ToggleMenuContext);

  return (
    <Burger
      data-testid="burger"
      onClick={() => setToggleMenu(!toggleMenu)}
      {...restProps}
    >
      {children}
    </Burger>
  );
};

Navbar.Menu = function NavbarMenu({ children, ...restProps }) {
  const { toggleMenu } = useContext(ToggleMenuContext);

  return (
    <Menu data-testid="nav-menu" isOpen={toggleMenu} {...restProps}>
      {children}
    </Menu>
  );
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
