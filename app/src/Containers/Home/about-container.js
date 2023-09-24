import nicoImagebw from "Assets/Images/nico.png";
import About from "Components/About/about";

export function AboutContainer() {
  return (
    <About>
      <About.Frame>
        <About.Content>
          <About.SubTitle>HI, I'M NICO</About.SubTitle>
          <About.FrameTitle>
            <About.Title>I started photography</About.Title>
            <About.Title>when I was in highschool</About.Title>
            <About.Title>and I totally fell in love </About.Title>
            <About.Title>with it</About.Title>
          </About.FrameTitle>
          <About.Description>
            I'm a photographer based in Regina, Saskatchewan. I started
            photography when I was in high school, and I totally fell in love
            with it. Until now, I can still remember the day that my photography
            teacher handed me her camera.
          </About.Description>
        </About.Content>
        <About.ImageOne>
          <About.Image src={nicoImagebw} />
        </About.ImageOne>
      </About.Frame>
    </About>
  );
}
