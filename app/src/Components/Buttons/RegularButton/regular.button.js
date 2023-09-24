import React from "react";
import { Button, ButtonContainer } from "./regular.button.styles";
const RegularButton = ({
  text,
  bgColor = "#313B41",
  txtColor = "white",
  width,
  height,
  variants,
}) => {
  return (
    <ButtonContainer variants={variants}>
      <Button
        bgColor={bgColor}
        txtColor={txtColor}
        width={width}
        height={height}
      >
        {text}
      </Button>
    </ButtonContainer>
  );
};

export default RegularButton;
