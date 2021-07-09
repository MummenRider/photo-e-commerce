import AboutSection from "Components/About/about";
import HeroSection from "Components/Hero/hero";
import Navbar from "Components/Navbar/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
