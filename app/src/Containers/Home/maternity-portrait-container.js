import MaternityPortrait from "Components/MaternityPortrait/maternity-portrait";
import maternityOnex from "Assets/Images/maternity-1-x.jpg";
import maternityTwo from "Assets/Images/maternity-2.jpg";
import maternityTwox from "Assets/Images/maternity-2-x.jpg";
import maternityThree from "Assets/Images/maternity-3.jpg";
import { useMediaQuery } from "react-responsive";
import RegularButton from "Components/Buttons/RegularButton/regular.button";
import Layout from "Components/Layout/layout";
import Image from "Components/Image/image";
import Text from "Components/Text/text";
import ParallaxItem from "Components/ParallaxItem/parallax-item";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function MaternityPortraitContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });
  let ref = useRef(null);

  return (
    <Layout position="relative" target={ref}>
      <MaternityPortrait>
        {isBigDevice && (
          <MaternityPortrait.ImageOne>
            <Image src={maternityOnex} />
          </MaternityPortrait.ImageOne>
        )}

        <MaternityPortrait.ImageTwo>
          <ParallaxItem
            target={ref}
            offset={["start end", "end 40%"]}
            yOutputRange={["15%", "0%"]}
          >
            <Image src={isBigDevice ? maternityTwox : maternityTwo} />
            {isBigDevice && (
              <Text.Small textAlign="end">ADAM & CHRISTINE</Text.Small>
            )}
          </ParallaxItem>
        </MaternityPortrait.ImageTwo>

        {isBigDevice && (
          <MaternityPortrait.ImageThree>
            <Image src={maternityThree} />
          </MaternityPortrait.ImageThree>
        )}

        <MaternityPortrait.Content>
          <Text.Large>
            Maternity
            <br /> Sessions
          </Text.Large>
          <Text.Regular>
            Lorem ipsum dolors sitead amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </Text.Regular>
          <RegularButton text="VIEW MORE" />
        </MaternityPortrait.Content>
      </MaternityPortrait>
    </Layout>
  );
}
