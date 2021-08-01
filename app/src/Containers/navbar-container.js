import Navbar from "Components/Navbar/navbar";
import { useMediaQuery } from "react-responsive";
import * as ROUTES from "Constants/route";
import { useCycle } from "framer-motion";
import { Burger } from "Components/Navbar/burger";

export function NavbarContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const [isOpen, setIsOpen] = useCycle(false, true);
  const sideBar = {
    close: {
      x: "100vw",
    },
    open: {
      x: isOpen ? 0 : "100vw",
      transition: { duration: 0.5 },
      ease: "easeInOut",
    },
  };

  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo to={ROUTES.HOME}>LOGO</Navbar.Logo>
        <Navbar.Button
          setIsOpen={() => setIsOpen()}
          isBigDevice={isBigDevice}
          animate={isOpen ? "open" : "close"}
        >
          <Burger />
        </Navbar.Button>
        <Navbar.MenuSide variants={sideBar} initial="close" animate="open">
          <Navbar.Item to={ROUTES.ABOUT}>ABOUT</Navbar.Item>
          <Navbar.Item to={ROUTES.SERVICES}>SERVICES</Navbar.Item>
          <Navbar.Item to={ROUTES.CONTACT}>CONTACT</Navbar.Item>
        </Navbar.MenuSide>
        <Navbar.Menu isBigDevice={isBigDevice}>
          <Navbar.Item to={ROUTES.ABOUT}>ABOUT</Navbar.Item>
          <Navbar.Item to={ROUTES.SERVICES}>SERVICES</Navbar.Item>
          <Navbar.Item to={ROUTES.CONTACT}>CONTACT</Navbar.Item>
        </Navbar.Menu>
      </Navbar.Container>
    </Navbar>
  );
}
