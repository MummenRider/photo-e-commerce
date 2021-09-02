import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Header,
  Logo,
  Menu,
  Item,
  Button,
  MenuSide,
} from "Components/Navbar/navbar.styles";
import useScroll from "Hooks/useScroll";

const ToggleMenuContext = createContext();

export default function Navbar({ isBigDevice, children, ...restProps }) {
  const { isScrolled } = useScroll(false);

  return (
    <Header
      initial={{ padding: !isScrolled && !isBigDevice ? "5vh 0" : "3vh 0" }}
      animate={{
        padding:
          isScrolled && !isBigDevice
            ? "2vh 0"
            : isScrolled && isBigDevice
            ? "1vh 0"
            : !isScrolled && !isBigDevice
            ? "5vh 0"
            : "3vh 0",
      }}
      transition={{ duration: 0.5, type: "tween" }}
      isScrolled={isScrolled}
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

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Navbar.MenuSide = function NavbarMenuSide({
  isBigDevice,
  children,
  ...restProps
}) {
  return !isBigDevice ? <MenuSide {...restProps}>{children}</MenuSide> : null;
};

Navbar.Menu = function NavbarMenu({ isBigDevice, children, ...restProps }) {
  const { toggleMenu } = useContext(ToggleMenuContext);

  return isBigDevice ? (
    <Menu data-testid="nav-menu" isOpen={toggleMenu} {...restProps}>
      {children}
    </Menu>
  ) : null;
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navbar.Button = function NavbarButton({
  setIsOpen,
  isBigDevice,
  children,
  ...restProps
}) {
  return !isBigDevice ? (
    <Button data-testid="menu-icon" onClick={setIsOpen} {...restProps}>
      {children}
    </Button>
  ) : null;
};
