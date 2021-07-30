import heroImg from "Assets/Images/hero-bg@2x.png";
import Hero from "Components/Hero/hero";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.ImageFrame>
        <Hero.Image src={heroImg} alt="image-background" />
      </Hero.ImageFrame>
      <Hero.TextContainer>
        <Hero.Text>Photography is</Hero.Text>
        <Hero.Text>the story I fail to</Hero.Text>
        <Hero.Text>put into words</Hero.Text>
      </Hero.TextContainer>

      <Hero.SVG
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 54"
        width="100"
        height="100"
      >
        <Hero.Path
          animate={{
            y: ["10%", "-1%"],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }}
          stroke="white"
          d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
        />
      </Hero.SVG>
    </Hero>
  );
}
