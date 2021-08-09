import Divider from "Components/Divider/divider";
import { ButtonIconPath } from "Components/Divider/divider.styles";
import LoadImage from "Components/ImageBlock/image-block";
import { AboutContainer } from "Containers/about-container";
import { HeroContainer } from "Containers/hero-container";
import { NavbarContainer } from "Containers/navbar-container";
import { StreetPhotoContainer } from "Containers/street-photo-container";
import flower from "Assets/Images/flower.png";

export default function Home({ isBigDevice }) {
  return (
    <>
      <NavbarContainer />
      <HeroContainer />
      <AboutContainer />

      <Divider position="initial" show={isBigDevice}>
        <Divider.Title>I do not capture images,</Divider.Title>
        <Divider.Title>I capture memories</Divider.Title>
        <Divider.Button>
          <Divider.ButtonText>My Creations</Divider.ButtonText>
          <Divider.ButtonIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ButtonIconPath
              d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
              fill="currentColor"
            />
          </Divider.ButtonIcon>
        </Divider.Button>
      </Divider>

      <StreetPhotoContainer />

      <Divider position="center" show={true}>
        <Divider.Subtitle>LOREM IPSUM DOTTOR ANET</Divider.Subtitle>
        <Divider.Title>Captured Portraits</Divider.Title>
        <Divider.ImageFrame width="15%">
          <LoadImage src={flower} alt="flower" />
        </Divider.ImageFrame>
      </Divider>
    </>
  );
}
