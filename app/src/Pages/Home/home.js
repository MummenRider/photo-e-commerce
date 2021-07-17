import AboutComponent from "Components/About/about";
import HeroSection from "Components/Hero/hero";
import { NavbarContainer } from "Containers/navbar-container";
import { NavBackgroundProvider } from "context/navbar-context";

export default function Home() {
  return (
    <>
      <NavBackgroundProvider>
        <NavbarContainer />
        <HeroSection />
        <AboutComponent options={{ threshold: 0.1 }} />
      </NavBackgroundProvider>
    </>
  );
}
