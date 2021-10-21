import Divider from "Components/Divider/divider";
import { AboutContainer } from "Containers/about-container";
import { HeroContainer } from "Containers/hero-container";
import { StreetPhotoContainer } from "Containers/street-photo-container";
import { CapturedPortraitContainer } from "Containers/captured-portrait-container";
import { AbstractPhotoContainer } from "Containers/abstract-photo-container";
import { PhotoShootStepContainer } from "Containers/photoshoot-step-container";
import { FooterContainer } from "Containers/footer-container";
import abstractFace from "Assets/Images/03.png";

export default function Home({ isBigDevice }) {
  const today = new Date();
  const day = today.toLocaleString("en-us", { weekday: "short" }).toUpperCase();
  const time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <HeroContainer />
      <AboutContainer />

      <Divider
        height="120vh"
        minHeight="1162.8px"
        bkgColor="#f2eded"
        color="black"
        show={isBigDevice}
      >
        <Divider.TextContainer>
          <Divider.Title size="3vw">
            “ Photos are a return {<br />}
            ticket to a moment {<br />}
            otherwise gone. ”
          </Divider.Title>
          <Divider.Subtitle>- KATHIE THURMES</Divider.Subtitle>
        </Divider.TextContainer>

        <Divider.SVGFrame options={{ threshold: 0.5 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 83.329">
            <g transform="translate(-893.062 -3019.773)">
              <path
                d="M12.636,0c8.645,0,15.653,8.059,15.653,18S21.281,36,12.636,36-13.875,18-13.875,18,3.992,0,12.636,0Z"
                transform="translate(893.062 3048.062) rotate(-90)"
              />
              <path
                d="M12.636,0c8.645,0,15.653,8.059,15.653,18S21.281,36,12.636,36-13.875,18-13.875,18,3.992,0,12.636,0Z"
                transform="translate(929.062 3074.813) rotate(90)"
              />
            </g>
          </svg>
        </Divider.SVGFrame>

        <Divider.TextContainer>
          <Divider.Title size="1.5vw">Memory Keeper</Divider.Title>
        </Divider.TextContainer>
      </Divider>

      <StreetPhotoContainer />

      <Divider
        height={isBigDevice ? "90vh" : "50vh"}
        minHeight={isBigDevice ? "924px" : "462px"}
        bkgColor="#f2eded"
        color="black"
        show={true}
      >
        <Divider.TextContainer>
          <Divider.Title size="3vw">Captured Portraits</Divider.Title>
        </Divider.TextContainer>

        <Divider.ImageFrame src={abstractFace} />
        <Divider.TextContainer>
          <Divider.Subtitle>LOREM IPSUM DOTTOR ANET</Divider.Subtitle>
        </Divider.TextContainer>
      </Divider>

      <CapturedPortraitContainer />
      <AbstractPhotoContainer />
      <PhotoShootStepContainer />
      <FooterContainer day={day} time={time} />
    </>
  );
}
