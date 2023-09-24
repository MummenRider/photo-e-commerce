import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as PAGEROUTES from "Constants/route";
import Home from "./Pages/Home/home";
import About from "Pages/About/about";
import { AnimatePresence } from "framer-motion";
import Portfolio from "Pages/Portfolio/portfolio";
import { useState, useEffect, useRef } from "react";

export default function AnimatedRoutes() {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      isFirstMount && setIsFirstMount(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [location, isFirstMount]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path={PAGEROUTES.HOME}
          element={<Home isFirstMount={isFirstMount} />}
        />
        <Route path={PAGEROUTES.ABOUT} element={<About />} />
        <Route path={PAGEROUTES.PORTFOLIO} element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}
