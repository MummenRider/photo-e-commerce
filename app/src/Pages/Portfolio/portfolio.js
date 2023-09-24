import { FooterContainer } from "Containers/Home/footer-container";
import PortfoloMainContainer from "Containers/Portfolio/portfolio-main";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <PortfoloMainContainer />
        <FooterContainer />
      </motion.div>
    </>
  );
}
