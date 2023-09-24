import React from "react";
import Review from "./review";
import { AnimatePresence, motion } from "framer-motion";
import Image from "Components/Image/image";
import Text from "Components/Text/text";

const ReviewItem = ({ review, innerRef }) => {
  return (
    <Review.ItemContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Review.ImageFrame>
        <Image src={require(`Assets/Images/${review.imageSrc}`)} />
      </Review.ImageFrame>
      <Review.TextContent>
        <Text.Medium>"{review.quote}"</Text.Medium>
        <Text.Regular>{review.comments}</Text.Regular>
        <Text.XSmall paddingTop="2em">- {review.name}</Text.XSmall>
      </Review.TextContent>
    </Review.ItemContainer>
  );
};

export default ReviewItem;
