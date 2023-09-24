import Navbar from "Components/Navbar/navbar";
import { ReactComponent as Logo } from "Assets/Images/logo-desktop.svg";
import { ReactComponent as LogoM } from "Assets/Images/logo-mobile.svg";
import { useMediaQuery } from "react-responsive";
import { BurgerLine } from "Components/Navbar/navbar.styles";
import { AnimatePresence, useCycle } from "framer-motion";
import { Sidebar } from "Components/Sidebar/sidebar";

export function NavbarContainer({
  color = "#FDF6EC",
  bgColor = "transparent",
  variants,
}) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <Navbar
      variants={variants}
      style={{ color: color, backgroundColor: bgColor }}
    >
      <Navbar.LogoContainer isBigDevice={isBigDevice}>
        <LogoM style={{ fill: color }} />
      </Navbar.LogoContainer>

      <Navbar.MenuList isBigDevice={isBigDevice}>
        <Navbar.Left>
          <Navbar.MenuItem to="/">HOME</Navbar.MenuItem>
          <Navbar.MenuItem to="/about">ABOUT</Navbar.MenuItem>
        </Navbar.Left>
        <Navbar.Center>
          <Navbar.LogoContainer>
            <Logo style={{ fill: color }} />
          </Navbar.LogoContainer>
        </Navbar.Center>
        <Navbar.Right>
          <Navbar.MenuItem to="/portfolio">PORTFOLIO</Navbar.MenuItem>
          <Navbar.MenuItem to="#">CONTACT</Navbar.MenuItem>
        </Navbar.Right>
      </Navbar.MenuList>

      <Navbar.BurgerIcon isBigDevice={isBigDevice} onClick={setIsOpen}>
        <BurgerLine style={{ backgroundColor: color }} />
        <BurgerLine style={{ backgroundColor: color }} />
      </Navbar.BurgerIcon>

      <AnimatePresence>
        {!isBigDevice && isOpen && (
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </Navbar>
  );
}
