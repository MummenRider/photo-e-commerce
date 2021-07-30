import AboutComponent from "Components/About/about";
import { HeroContainer } from "Containers/hero-container";
import { NavbarContainer } from "Containers/navbar-container";

export default function Home() {
  return (
    <>
      <NavbarContainer />
      <HeroContainer />
      <AboutComponent />
    </>
  );
}
