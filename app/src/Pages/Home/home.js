import { HeroContainer } from "Containers/Home/hero-container";
import servicesJPG from "Assets/Images/services-1.jpg";
import { CouplesPortraitContainer } from "Containers/Home/couples-portrait-container";
import { MaternityPortraitContainer } from "Containers/Home/maternity-portrait-container";
import { ReviewContainer } from "Containers/Home/review-container";
import {
  Feature,
  Item,
  Title,
  Divider,
  Inner,
  QuoteContainer,
  Quote,
  Author,
  ImageContainer,
  ServicesContainer,
  ServicesDescription,
  ServicesSubTitle,
  ServicesTitle,
  XLTextsFrame,
} from "./home.styles";

import { BlogsContainer } from "Containers/Home/blogs-container";
import { FamilySessionContainer } from "Containers/Home/family-session-container";
import { FooterContainer } from "Containers/Home/footer-container";

import {
  PageTransition,
  TransitionFirstMount,
} from "../../Components/Transitions/transition";

import Text from "Components/Text/text";
import ParallaxItem from "Components/ParallaxItem/parallax-item";
import { useMediaQuery } from "react-responsive";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";
import ParallaxImage from "Components/ParallaxItem/ParallaxImage/parallax";

export default function Home({ isFirstMount }) {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1900px)" });
  const xtraBigDevice = useMediaQuery({ query: "(min-width: 3000px)" });
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    // start start - animate when target is on the top of the screen
    // start end - animate when target is visible at the end of the screen
    offset: ["start end", "center start"],
  });

  const ease = { damping: 15, mass: 1, stiffness: 100, bounce: 0 };
  const smooth = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1,
    bounce: 0,
  });
  // smooth stransition - replace scrollyprogress with smooth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  let majRef = useRef(null);
  return (
    <>
      {/* {isFirstMount && <TransitionFirstMount />} */}
      <PageTransition>
        <HeroContainer isFirstMount={isFirstMount} />
        <Feature>
          <Inner>
            <Title>WORK FEATURED IN</Title>
            <Divider />
            <Item>
              REGINA <br />
              TOURISM
            </Item>
            <Item>
              QUEEN <br />
              CITY EX
            </Item>
          </Inner>
        </Feature>
        <QuoteContainer>
          <Quote>
            “A good photograph is one that communicates a fact, touches the
            heart and leaves the viewer a changed person for having seen it. It
            is, in a word, effective.”
          </Quote>
          <Author>— IRVING PENN</Author>
        </QuoteContainer>

        <ImageContainer ref={ref}>
          <ParallaxImage
            target={ref}
            imgSrc={servicesJPG}
            yOutputRange={["0%", "80%"]}
          />
          <ServicesContainer>
            <ServicesSubTitle>FOR RAW + AUTHENTIC EXPERIENCE</ServicesSubTitle>
            <ServicesTitle>My Services</ServicesTitle>
            <ServicesDescription>
              Explain your services in one/two sentence(s) -Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </ServicesDescription>
          </ServicesContainer>
        </ImageContainer>

        <FamilySessionContainer />
        <CouplesPortraitContainer />
        <div
          ref={majRef}
          style={{ position: isBigDevice ? "relative" : "unset" }}
        >
          <MaternityPortraitContainer />
          {isBigDevice && (
            <>
              <Text.ExtraLargeText opacity=".4" position="absolute" bottom="4%">
                Capture
              </Text.ExtraLargeText>
              <ParallaxItem
                position="absolute"
                right="3%"
                bottom="4%"
                target={majRef}
                offset={["center start", "end 25%"]}
                yOutputRange={["0%", "75%"]}
              >
                <Text.ExtraLargeText opacity=".8">Capture</Text.ExtraLargeText>
              </ParallaxItem>
              <ParallaxItem
                position="absolute"
                right="3%"
                bottom="4%"
                target={majRef}
                offset={["center start", "end 25%"]}
                yOutputRange={["0%", "150%"]}
              >
                <Text.ExtraLargeText opacity="1">Capture</Text.ExtraLargeText>
              </ParallaxItem>
            </>
          )}
        </div>

        <ReviewContainer />
        {/* <BlogsContainer /> */}
        <FooterContainer />
      </PageTransition>
    </>
  );
}
