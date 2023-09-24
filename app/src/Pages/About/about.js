import { AboutMainContainer } from "Containers/About/about-main-container";
import { motion } from "framer-motion";

import { FooterContainer } from "Containers/Home/footer-container";
import { PageTransition } from "../../Components/Transitions/transition";
export default function About() {
  return (
    <>
      <PageTransition>
        <AboutMainContainer />
        <FooterContainer />
      </PageTransition>
    </>
  );
}
