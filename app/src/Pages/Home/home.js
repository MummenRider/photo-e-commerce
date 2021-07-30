import { AboutContainer } from "Containers/about-container";
import { HeroContainer } from "Containers/hero-container";
import { NavbarContainer } from "Containers/navbar-container";

export default function Home() {
  return (
    <>
      <NavbarContainer />
      <HeroContainer />
      <AboutContainer />
    </>
  );
}
