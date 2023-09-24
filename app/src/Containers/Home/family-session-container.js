import FamilySession from "Components/FamilySessions/family-sessions";
import Layout from "Components/Layout/layout";
import Image from "Components/Image/image";
import fam1 from "Assets/Images/fam-1.jpg";
import fam2 from "Assets/Images/fam-2.jpg";
import fam3 from "Assets/Images/fam-3.jpg";
import Text from "Components/Text/text";
import RegularButton from "Components/Buttons/RegularButton/regular.button";
import { useInView } from "react-intersection-observer";

export function FamilySessionContainer() {
  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: [0, 0.2, 0.6, 1],
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const item2 = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: [0, 0.2, 0.6, 1],
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Layout>
      <FamilySession>
        <FamilySession.CircleBG />
        <FamilySession.ImageStack>
          <FamilySession.ImageOne>
            <Image src={fam1} />
          </FamilySession.ImageOne>
          <FamilySession.ImageTwo>
            <Image src={fam2} />
          </FamilySession.ImageTwo>
        </FamilySession.ImageStack>
        <FamilySession.ImageThree>
          <Image src={fam3} />
        </FamilySession.ImageThree>
        <FamilySession.Content variants={parentVariant}>
          <Text.Large variants={item}>
            Family <br />
            Sessions
          </Text.Large>
          <Text.Regular variants={item2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text.Regular>

          <RegularButton
            text="VIEW MORE"
            bgColor="#313B41"
            txtColor="#FDF6EC"
            variants={item}
          />
        </FamilySession.Content>
      </FamilySession>
    </Layout>
  );
}
