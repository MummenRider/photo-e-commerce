import Image from "Components/Image/image";
import Text from "Components/Text/text";
import { CardBody, CardImage, CardInner, Container } from "./card.styles";

import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

export default function Card({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const cardInner = {
    hidden: {
      clipPath: "inset(0% 100% 0% 0%)",
      //width: "0%",
    },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      //width: "100%",

      transition: {
        duration: 1,
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const cardItemVariant = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container>
      <CardImage>
        <Image src={require(`Assets/Images/${item.imageSrc}`)} />
      </CardImage>
      <AnimatePresence>
        <CardBody>
          <CardInner
            ref={ref}
            variants={cardInner}
            animate={isInView ? "show" : "hidden"}
          >
            <Text.Small variants={cardItemVariant} fontWeight="bold">
              {item.subTitle}
            </Text.Small>
            <Text.Regular variants={cardItemVariant}>
              {item.description}
            </Text.Regular>
            <Text.Button variants={cardItemVariant} link={item.buttonLink}>
              Read More
            </Text.Button>
          </CardInner>
        </CardBody>
      </AnimatePresence>
    </Container>
  );
}
