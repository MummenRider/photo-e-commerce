import Hero from "Components/Hero/hero";
import vid from "Assets/Images/vid-bg.mp4";
import vidweb from "Assets/Images/vid-bg.webm";
import { NavbarContainer } from "./navbar-container";
import { motion } from "framer-motion";

export function HeroContainer({ isFirstMount }) {
  const content = (isFirstMount) => ({
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: isFirstMount ? 1.5 : 0,
      },
    },
  });

  const nav = {
    initial: { y: -15, opacity: 0 },
    animate: {
      y: 0,

      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  const arcContainer = {
    initial: { opacity: 0, y: -15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const arc = {
    initial: {
      rotate: 360,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 50,
        repeat: "Infinity",
        ease: "linear",
      },
    },
  };

  return (
    <Hero variants={content(isFirstMount)} initial="initial" animate="animate">
      <NavbarContainer variants={nav} />
      <Hero.VideoBackground autoPlay muted loop>
        <Hero.VideoContent src={vidweb} type="video/webm" />
        <Hero.VideoContent src={vid} type="video/mp4" />
      </Hero.VideoBackground>
      <Hero.Content>
        <motion.svg
          variants={arcContainer}
          viewBox="-50 -50 422 422"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="textcircle"
              d="M322 161C322 249.918 249.918 322 161 322C72.0822 322 0 249.918 0 161C0 72.0822 72.0822 0 161 0C249.918 0 322 72.0822 322 161ZM161 321C249.366 321 321 249.366 321 161C321 72.6344 249.366 1 161 1C72.6344 1 1 72.6344 1 161C1 249.366 72.6344 321 161 321Z"
            />
          </defs>
          <motion.text
            fontSize={100}
            fill="white"
            style={{
              fontFamily: "filmotype-lacrosse, sans-serif",
              transform: "translate(13.5%, 43%)",
            }}
          >
            <tspan>Capture</tspan>
          </motion.text>
          <motion.g className="textcircle" variants={arc}>
            <text
              fontSize={26}
              fontFamily={"brandon-grotesque, sans-serif"}
              textLength="970px"
              fill="white"
            >
              <textPath xlinkHref="#textcircle" textLength="970px">
                Beauty - Stories - Emotions - Time -
              </textPath>
            </text>
          </motion.g>
        </motion.svg>
      </Hero.Content>
    </Hero>
  );
}
