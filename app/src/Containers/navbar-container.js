import Navbar from "Components/Navbar/navbar";

import * as ROUTES from "Constants/route";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo to={ROUTES.HOME}>LOGO</Navbar.Logo>
        <Navbar.Burger>
          <span />
          <span />
          <span />
        </Navbar.Burger>
        <Navbar.Menu>
          <Navbar.Item to={ROUTES.ABOUT}>ABOUT</Navbar.Item>
          <Navbar.Item to={ROUTES.SERVICES}>SERVICES</Navbar.Item>
          <Navbar.Item to={ROUTES.CONTACT}>CONTACT</Navbar.Item>
        </Navbar.Menu>
      </Navbar.Container>
    </Navbar>
  );
}
