import AboutComponent from "Components/About/about";
import HeroSection from "Components/Hero/hero";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutComponent options={{ threshold: 0.1 }} />
    </>
  );
};

export default Home;
