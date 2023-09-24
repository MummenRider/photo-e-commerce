import { ButtonContainer } from "./round.button.styles";

import React from "react";

const RoundButton = ({ rotate }) => {
  return (
    <ButtonContainer rotate={rotate}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="15"
        viewBox="0 0 53 15"
      >
        <g
          id="Group_154"
          data-name="Group 154"
          transform="translate(-1075.119 -7746.899)"
        >
          <path
            id="Polygon_7"
            data-name="Polygon 7"
            d="M7.5,0,15,12H0Z"
            transform="translate(1075.119 7761.899) rotate(-90)"
            fill="#313b41"
          />
          <path
            id="Path_54"
            data-name="Path 54"
            d="M-3040.033,7097.9h-50a1,1,0,0,1-1-1,1,1,0,0,1,1-1h50a1,1,0,0,1,1,1A1,1,0,0,1-3040.033,7097.9Z"
            transform="translate(4167.152 657.5)"
            fill="#313b41"
          />
        </g>
      </svg>
    </ButtonContainer>
  );
};

export default RoundButton;
