import RoundButton from "Components/Buttons/RoundButton/round.button";
import Review from "Components/Review/review";
import { useState } from "react";
import { ReviewsData } from "Components/Review/reviews-data.js";
import ReviewItem from "Components/Review/review-card-item";
import useMeasure from "react-use-measure";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Layout from "Components/Layout/layout";
import Text from "Components/Text/text";
import { useMediaQuery } from "react-responsive";

export function ReviewContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = ReviewsData.length;
  const isBigDevice = useMediaQuery({ query: "(min-width: 48em)" });

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === length - 1 ? length - 1 : currentSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };

  return (
    <Layout background="white" isInlinePadded={true}>
      <Review>
        <Review.SmallTitleContainer>
          <Text.Small>Kind Words</Text.Small>
        </Review.SmallTitleContainer>
        <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
          {ReviewsData.map((review, index) => {
            return (
              index === currentSlide && (
                <ReviewItem key={review.id} review={review} />
              )
            );
          })}
        </MotionConfig>
        <Review.ButtonContainer>
          <Review.PreviousButton previousSlide={previousSlide}>
            <RoundButton />
          </Review.PreviousButton>
          <Review.NextButton nextSlide={nextSlide}>
            <RoundButton rotate="-180deg" />
          </Review.NextButton>
        </Review.ButtonContainer>
      </Review>
    </Layout>
  );
}
