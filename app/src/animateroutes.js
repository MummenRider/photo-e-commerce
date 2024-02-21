import { Route, Routes, useLocation } from "react-router-dom";
import * as PAGEROUTES from "Constants/route";
import Home from "./Pages/Home/home";
import About from "Pages/About/about";
import { AnimatePresence } from "framer-motion";
import Portfolio from "Pages/Portfolio/portfolio";
import { useState, useEffect } from "react";

export default function AnimatedRoutes() {
  const location = useLocation();
  const [isFirstMountHome, setIsFirstMountHome] = useState(true);
  const [isFirstMountAbout, setIsFirstMountAbout] = useState(true);

  useEffect(() => {
    const pathname = location.pathname;
    setTimeout(() => {
      if (pathname === PAGEROUTES.HOME && isFirstMountHome) {
        setIsFirstMountHome(false);
      } else if (pathname === PAGEROUTES.ABOUT && isFirstMountAbout) {
        setIsFirstMountAbout(false);
      }
      
    },1500)
 
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path={PAGEROUTES.HOME}
          element={<Home isFirstMount={isFirstMountHome} />}
        />
        <Route
          path={PAGEROUTES.ABOUT}
          element={<About isFirstMount={isFirstMountAbout} />}
        />
        <Route path={PAGEROUTES.PORTFOLIO} element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}
