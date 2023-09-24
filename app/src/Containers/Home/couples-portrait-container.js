// import RegularButton from "Components/Buttons/RegularButton/regular.button";
// import CouplesPortrait from "Components/CouplesPortrait/couples-portrait";
// import coupleOne from "Assets/Images/couple-1.png";
// import coupleTwo from "Assets/Images/couple-2.png";

import coup1 from "Assets/Images/coup-1.jpg";

import coup2 from "Assets/Images/coup-2.jpg";

import CouplesPortrait from "Components/CouplesPortrait/couples-portrait";
import Image from "Components/Image/image";
import Layout from "Components/Layout/layout";
import Text from "Components/Text/text";

export function CouplesPortraitContainer() {
  const clicked = () => console.log("i am clicked");
  return (
    <Layout background="#FBF6EF" isInlinePadded={false} isBlockPadded={false}>
      <CouplesPortrait>
        <CouplesPortrait.ImageOne>
          <Image alt="couple-1" src={coup1} />
        </CouplesPortrait.ImageOne>
        <CouplesPortrait.Title>
          <Text.Large>
            Couple <br />
            Sessions
          </Text.Large>
        </CouplesPortrait.Title>
        <CouplesPortrait.ImageTwo>
          <Image alt="couple-2" src={coup2} />
        </CouplesPortrait.ImageTwo>
        <CouplesPortrait.TextContainer>
          <Text.Regular paddingBlock="unset">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text.Regular>
          <CouplesPortrait.TextButton>VIEW MORE</CouplesPortrait.TextButton>
        </CouplesPortrait.TextContainer>
      </CouplesPortrait>
    </Layout>
  );
}

/* <CouplesPortrait>
<CouplesPortrait.EvenColumns>
  <CouplesPortrait.ImageStack>
    <CouplesPortrait.ImageOne>
      <CouplesPortrait.Image src={coupleOne} />
    </CouplesPortrait.ImageOne>
    <CouplesPortrait.ImageTwo>
      <CouplesPortrait.Image src={coupleTwo} />
    </CouplesPortrait.ImageTwo>
  </CouplesPortrait.ImageStack>

  <CouplesPortrait.Content>
    <CouplesPortrait.Title>ENGAGEMENT SESSIONS</CouplesPortrait.Title>
    <CouplesPortrait.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
      tempor incididunt ut labore et dolore magna aliqua.
    </CouplesPortrait.Description>
    <CouplesPortrait.ButtonContainer>
      <RegularButton
        text="VIEW MORE"
        bgColor="#313B41"
        txtColor="#FDF6EC"
      />
    </CouplesPortrait.ButtonContainer>
  </CouplesPortrait.Content>
</CouplesPortrait.EvenColumns>
</CouplesPortrait> */
