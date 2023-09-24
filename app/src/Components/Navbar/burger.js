import React from "react";
import { motion } from "framer-motion";
import { BurgerContainer, BurgerLine } from "./navbar.styles";

export default function Burger() {
  return (
    <BurgerContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.263"
        height="22.263"
        viewBox="0 0 22.263 22.263"
      >
        <g
          id="Group_127"
          data-name="Group 127"
          transform="translate(-183.869 -172.369)"
        >
          <line
            id="Line_46"
            data-name="Line 46"
            x2="20"
            y2="20"
            transform="translate(185 173.5)"
            fill="none"
            stroke="#313b41"
            stroke-linecap="round"
            stroke-width="1.6"
          />
          <line
            id="Line_47"
            data-name="Line 47"
            x2="20"
            y2="20"
            transform="translate(185 193.5) rotate(-90)"
            fill="none"
            stroke="#313b41"
            stroke-linecap="round"
            stroke-width="1.6"
          />
        </g>
      </svg>
    </BurgerContainer>
  );
}
