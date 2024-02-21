import AboutMain from "Components/About/about.main";
import One from "Assets/Images/nico-2.png";
import Two from "Assets/Images/abt-nico.png";
import Three from "Assets/Images/about-1.jpg";
import Four from "Assets/Images/about-2.png";
import Five from "Assets/Images/about-3.png";
import { useMediaQuery } from "react-responsive";
import { NavbarContainer } from "../../Containers/Home/navbar-container";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import TextAnimation from "Components/Animation/text-animation";
export function AboutMainContainer({isFirstMount}) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  const fourSubTitle = {
    gridColumn: "3 / span 8",
    gridRow: 2,
    gridColumnB: "12 / 20",
    paddingRight: 0,
    textAlign: "end",
  };
  const fourDescription = {
    gridColumn: "3 / span 9",
    gridRow: 3,
    gridColumnB: "6 / 12",
    paddingR: 0,
    paddingL: 40,
  };

  const fiveSubTitle = {
    gridColumn: "3 / span 8",
    gridRow: 2,
    gridColumnB: "6 / span 7",
    textAlign: "start",
  };
  const fiveDescription = {
    gridColumn: "3 / span 9",
    gridRow: 3,
    gridColumnB: "6 / span 7",
    paddingR: 30,
    paddingL: 0,
  };
  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 1, y: 30 },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.35,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const childVariant1 = {
    hidden: { opacity: 0, y: -8 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.9,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  // const textRef = useRef(null);
  // const isInView = useInView(textRef, {
  //   once: false,
  //   amount: "some",
  // });


  return (
    <AboutMain>
      <AboutMain.HeroStack isFirstMount={isFirstMount} variant={parentVariant}>
        <NavbarContainer
          variants={childVariant1}
          color="#313B41"
          bgColor="var(--bg-primary)"
        />
        <AboutMain.ImageOne variant={childVariant}>
          <AboutMain.Image src={One} />
        </AboutMain.ImageOne>
        <AboutMain.ImageTwo isBigDevice={isBigDevice} variant={childVariant}>
          <AboutMain.Image src={Two} />
          <AboutMain.AboutTitle variant={childVariant1}>
            ABOUT
          </AboutMain.AboutTitle>
        </AboutMain.ImageTwo>
        <AboutMain.MidQuote variant={childVariant1}>
          Some photography quotes here this is another line, extra, and one more
          here
        </AboutMain.MidQuote>
        <AboutMain.Description variant={childVariant1}>
          <p>
            I’m a photographer based in Regina, Saskatchewan. I started
            photography when I was in high school, and I totally fell in love
            with it. Until now, I can still remember the day that my photography
            teacher handed me her camera.
          </p>
        </AboutMain.Description>
      </AboutMain.HeroStack>
      <AboutMain.ImageDivider>
        <AboutMain.ImageThree>
          <AboutMain.Image src={Three} />
        </AboutMain.ImageThree>

        <AboutMain.SmallQuote>
          <TextAnimation once={true}>
            How you got here in one/two sentence(s) -Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </TextAnimation>
        </AboutMain.SmallQuote>
      </AboutMain.ImageDivider>
      <AboutMain.ImageFourContainer>
        <AboutMain.ImageFour>
          <AboutMain.Image src={Four} />
        </AboutMain.ImageFour>
        <AboutMain.TextContent
          subTitle={fourSubTitle}
          isBigDevice={isBigDevice}
        >
          <TextAnimation>
            <h1>What inspires me to be creative in my work</h1>
          </TextAnimation>
          <TextAnimation animateDirection="y" amount={0.2}>
            <AboutMain.ImageDescription desc={fourDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </AboutMain.ImageDescription>
          </TextAnimation>
        </AboutMain.TextContent>
      </AboutMain.ImageFourContainer>
      <AboutMain.LargeQuote>
        <h1>In one sentence, what makes you unique to other photographers</h1>
      </AboutMain.LargeQuote>
      <AboutMain.ImageFiveContainer>
        <AboutMain.ImageFive>
          <AboutMain.Image src={Five} />
        </AboutMain.ImageFive>
        <AboutMain.TextContent subTitle={fiveSubTitle}>
          <TextAnimation reverse={true}>
            <h1>Where I'm looking to go next</h1>
          </TextAnimation>
          <TextAnimation animateDirection="y" amount={0.2}>
            <AboutMain.ImageDescription desc={fiveDescription}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </AboutMain.ImageDescription>
          </TextAnimation>
        </AboutMain.TextContent>
      </AboutMain.ImageFiveContainer>
    </AboutMain>
  );
}
