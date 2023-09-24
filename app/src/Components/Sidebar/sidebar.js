import Burger from "Components/Navbar/burger";
import React from "react";
import { ReactComponent as Logo } from "Assets/Images/logo.svg";
import { ReactComponent as Instagram } from "Assets/Images/instagram.svg";
import { ReactComponent as Facebook } from "Assets/Images/facebook.svg";
import { ReactComponent as Twitter } from "Assets/Images/twitter.svg";
import {
  CloseButtonContainer,
  ItemContainer,
  LogoContainer,
  MenuItem,
  MenuList,
  SideBarContainer,
  SideBarInner,
  SocialMediaItem,
  SocialMediaList,
} from "./sidebar.styles";
import { MenuItems } from "./sidebar.data";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const SocialMediaItems = [
    {
      id: 1,
      component: <Instagram />,
      to: "https://www.instagram.com/inocalla.ruinico/",
    },
    {
      id: 2,
      component: <Facebook />,
      to: "https://www.facebook.com/inocallaruinico",
    },
    {
      id: 3,
      component: <Twitter />,
      to: "https://twitter.com/RInocalla",
    },
  ];

  return (
    <SideBarContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      exit={{ opacity: 0 }}
    >
      <SideBarInner>
        <CloseButtonContainer onClick={setIsOpen}>
          <Burger />
        </CloseButtonContainer>
        <LogoContainer
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Logo />
        </LogoContainer>
        <MenuList>
          {MenuItems.map((menuItem, index) => (
            <ItemContainer>
              <MenuItem key={index} to={menuItem.to} onClick={setIsOpen}>
                {menuItem.link}
              </MenuItem>
            </ItemContainer>
          ))}
        </MenuList>
        <SocialMediaList>
          {SocialMediaItems.map((mediaItem, index) => (
            <SocialMediaItem
              key={index}
              href={mediaItem.to}
              onClick={setIsOpen}
            >
              {mediaItem.component}
            </SocialMediaItem>
          ))}
        </SocialMediaList>
      </SideBarInner>
    </SideBarContainer>
  );
};
