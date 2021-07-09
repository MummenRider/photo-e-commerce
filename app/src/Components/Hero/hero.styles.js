import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  /* &::after {
    content: "EXPLORE";
    color: white;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    padding-right: 10px;
    text-indent: 25px;
    font-size: 1rem;
    letter-spacing: 1px;
    border-right: 2.6px solid white;
    position: absolute;
    right: 10rem;
    bottom: 0;
    animation: lineframe 2s ease-in-out infinite;

    @keyframes lineframe {
      from {
        height: 0px;
      }
      to {
        height: 140px;
      }
    }
  } */
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const ImageBackground = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

export const HeroContent = styled.div`
  z-index: 2;
  width: 90%;
  max-width: 300px;

  @media screen and (min-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (min-width: 640px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (min-width: 1224px) {
    max-width: 850px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1000px;
  }
`;

export const HeroH1 = styled.h1`
  text-align: center;
  font-family: lust-sans, sans-serif;
  font-size: 3.4rem;
  font-style: italic;
  font-weight: lighter;
  line-height: 5rem;
  color: white;

  @media screen and (min-width: 375px) {
    font-size: 4.4rem;
  }

  @media screen and (min-width: 640px) {
    font-size: 6rem;
    line-height: 10rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 8rem;
    line-height: 12rem;
  }

  @media screen and (min-width: 1224px) {
    font-size: 10rem;
    line-height: 14rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 12rem;
    line-height: 16rem;
  }
`;

export const HeroLine = styled.div`
  position: absolute;
  background-color: white;
  width: 1.3px;
  bottom: 0;
  height: 140px;
  right: 10rem;
  transform-origin: 100% 0%;
  animation: lineframe 3s ease-in;

  @keyframes lineframe {
    from {
      transform: scale(1, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }

  &::after {
    content: "EXPLORE";
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 1.2rem;
    position: absolute;
    letter-spacing: 2.4px;
    left: -50px;
    top: 50%;
    transform: rotate(270deg);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
