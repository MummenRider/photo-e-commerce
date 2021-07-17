import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Header,
  Logo,
  Burger,
  Menu,
  Item,
} from "Components/Navbar/navbar.styles";
import { useNavBackground } from "context/navbar-context";
const ToggleMenuContext = createContext();

export default function Navbar({ children, ...restProps }) {
  const { navBackground } = useNavBackground();
  return (
    <Header
      isScrolled={navBackground}
      data-testid="nav-background"
      {...restProps}
    >
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

Navbar.Logo = function NavbarLogo({ to, children, ...restProps }) {
  return (
    <Logo to={to} {...restProps}>
      {children}
    </Logo>
  );
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

Navbar.Item = function NavbarItem({ to, children, ...restProps }) {
  return (
    <Item to={to} {...restProps}>
      {children}
    </Item>
  );
};
