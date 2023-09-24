import React from "react";
import {
  Container,
  BurgerIcon,
  LogoContainer,
  MenuItem,
  MenuList,
  SocialMediaItem,
  SocialMediaList,
  Inner,
  Image,
  Right,
  Center,
  Left,
} from "Components/Navbar/navbar.styles";

export default function Navbar({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Navbar.LogoContainer = function NavbarLogoContainer({
  isBigDevice,
  children,
  ...restProps
}) {
  return (
    !isBigDevice && <LogoContainer {...restProps}>{children}</LogoContainer>
  );
};

Navbar.MenuList = function NavbarMenuList({
  isBigDevice,
  children,
  ...restProps
}) {
  return isBigDevice && <MenuList {...restProps}>{children}</MenuList>;
};

Navbar.MenuItem = function NavbarMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navbar.SocialMediaList = function NavbarSocialMediaList({
  children,
  ...restProps
}) {
  return <SocialMediaList {...restProps}>{children}</SocialMediaList>;
};

Navbar.SocialMediaItem = function NavbarSocialMediaItem({
  children,
  ...restProps
}) {
  return <SocialMediaItem {...restProps}>{children}</SocialMediaItem>;
};

Navbar.BurgerIcon = function NavbarBurgerIcon({
  isBigDevice,
  children,
  ...restProps
}) {
  return !isBigDevice && <BurgerIcon {...restProps}>{children}</BurgerIcon>;
};

Navbar.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Navbar.Left = function NavbarLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Navbar.Center = function NavbarCenter({ children, ...restProps }) {
  return <Center {...restProps}>{children}</Center>;
};

Navbar.Right = function NavbarRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};
