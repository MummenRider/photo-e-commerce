import heroImg from "Assets/Images/hero-bg@2x.png";
export function HeroContainer() {
  return (
    <Hero>
      <Hero.Image src={heroImg} alt="image-background" />
      <Hero.Text>Photography is the story I fail to put into words.</Hero.Text>
      <Hero.CircleFrame>
        <Hero.Circle />
      </Hero.CircleFrame>
    </Hero>
  );
}
