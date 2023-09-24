import React, { useRef } from "react";
import ParallaxContent from "Components/ParallaxContent/parallax-content";
import AnimatedRoutes from "animateroutes";
import ScrollToTop from "./Components/ScrollToTop/scrollToTop";
import { NavbarContainer } from "./Containers/Home/navbar-container";
import SmoothScroll from "Components/SmoothScroll/smoothscroll";

const App = () => {
  const ref = useRef(null);
  return (
    <>
      {/* <ScrollToTop /> PARALLAX CONTENT BELOW*/}

      <AnimatedRoutes />
    </>
  );
};

export default App;
