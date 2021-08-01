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
        <Hero.Text>the story I fails to</Hero.Text>
        <Hero.Text>put into words</Hero.Text>
      </Hero.TextContainer>
    </Hero>
  );
}
