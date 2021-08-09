import nicoImg from "Assets/Images/mobile-abt-nico@3x.png";
import About from "Components/About/about";
import { useMediaQuery } from "react-responsive";

export function AboutContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <About>
      <About.Title isBigDevice={!isBigDevice}>Who am I</About.Title>
      <About.Image src={nicoImg} alt="nico" />
      <About.Content>
        <About.Title isBigDevice={isBigDevice}>Who am I</About.Title>
        <About.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          iaculis urna id volutpat lacus laoreet non. Ut eu sem integer vitae
          justo eget. Iaculis at erat pellentesque adipiscing commodo. Nam at
          lectus urna duis convallis convallis tellus id. Sed nisi lacus sed
          viverra tellus in hac. Id cursus metus aliquam eleifend mi in nulla.
          Nulla posuere sollicitudin aliquam ultrices sagittis. Est ante in nibh
          mauris cursus mattis molestie. Qas utsaqa sasas tortorsa pretium
          viverra suspendisse potenti nullam ac.
        </About.Description>
        <About.Description>
          Egestas integer eget aliquet nibh praesent tristique magna sit amet.
          Vitae nunc sed velit dignissim sodales ut eu sem. Faucibus in ornare
          quam viverra orci sagittis eu. Justo laoreet sit amet cursus sit amet
          dictum sit amet. Orci a scelerisque purus semper eget duis at tellus.
          Purus ut faucibus pulvinar elementum. Odio facilisis mauris sit amet
          massa vitae tortor.
        </About.Description>
        <About.Description>
          Faucibus in ornare quam viverra orci sagittis eu. Justo laoreet sit
          amet cursus sit amet dictum sit amet. Orci a scelerisque purus semper
          eget duis at tellus. Purus ut faucibus pulvinar elementum. Odio
          facilisis mauris sit amet massa vitae tortor.
        </About.Description>
      </About.Content>
    </About>
  );
}
