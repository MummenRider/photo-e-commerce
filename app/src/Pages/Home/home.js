import AboutComponent from "Components/About/about";
import HeroSection from "Components/Hero/hero";
import { NavbarContainer } from "Containers/navbar-container";

export default function Home() {
  return (
    <>
      <NavbarContainer />
      <HeroSection />
      <AboutComponent />
    </>
  );
}
