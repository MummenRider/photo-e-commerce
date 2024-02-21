import { AboutMainContainer } from "Containers/About/about-main-container";
import { motion } from "framer-motion";

import { FooterContainer } from "Containers/Home/footer-container";
import { PageTransition } from "../../Components/Transitions/transition";
import { useEffect, useRef } from "react";
export default function About({isFirstMount}) {
console.log('About', isFirstMount);
  return (
    <>
      <PageTransition>
        <AboutMainContainer isFirstMount={isFirstMount} />
        <FooterContainer />
      </PageTransition>
    </>
  );
}
