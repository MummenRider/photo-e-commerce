import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: rgb(240, 238, 236);
  padding: 14vh 0 8vh 0;
  position: relative;
  flex-wrap: wrap;
  &::before {
    content: '';
    display: ${(props) => (props.isMobile ? 'block' : 'none')};
    position: absolute;
    top: -1%;
    left: 50%;
    transform: translate(-50%, 1%);
    width: 0;
    height: 0;
    border-top: 6vh solid #dbd8c7;
    border-left: 3vh solid transparent;
    border-right: 3vh solid transparent;
  }

  & > * {
    flex: 1 0 50%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled(motion.div)``;
export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 125%;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;

  .goo {
  }
`;

export const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 4.2rem;
  font-weight: lighter;
  text-align: left;
  line-height: 1.2;
  padding: 5rem 0 1rem 0;

  @media screen and (min-width: 768px) {
    font-size: clamp(3.2rem, 5vw, 32rem);
    padding: 0;
  }
`;

export const SubTitle = styled.p`
  font-family: var(--ff-primary);
  font-size: clamp(1.5rem, 1.2vw, 7.8rem);
  margin-bottom: 10%;
  span {
    color: #9a6130;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  font-family: var(--ff-primary);
  counter-reset: counterName;
`;

export const Item = styled.p`
  font-size: clamp(1.2rem, 0.8vw, 5.2rem);
  font-weight: 200;
  margin: 2em 0;
  position: relative;
  padding-left: 15%;

  &::before {
    counter-increment: counterName;
    content: '0' counter(counterName) '. ';
    font-size: clamp(1rem, 0.8vw, 4.5rem);
    position: absolute;
    left: 0;
  }
`;

export const Wrapper = styled.div``;

export const ContactBtn = styled(motion.div)`
  border: 3px solid #9a6130;
  text-align: center;
  font-family: var(--ff-primary);
  font-size: clamp(1rem, 1vw, 6rem);
  width: 40%;
  min-width: 100px;
  padding: 1.5em 0;
  position: relative;
  transition: all 700ms ease;
  margin-top: 5%;
  margin-left: 15%;
  z-index: 1;
  color: #9a6130;
  border-radius: 0.2em;
  &::before {
    position: absolute;
    pointer-events: none;
    left: 120%;
    font-size: clamp(0.9rem, 0.5vw, 5rem);
    width: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 200;
    color: black;
    width: 80%;
    min-width: 100px;
    content: 'Lorem ipsum dolor sit amet,
consetetu';
  }
  &:hover {
    color: #fff;
    .c-button__blobs {
      div {
        transform: scale(1.4) translateY(0) translateZ(0);
      }
    }
  }
  .gooeyE {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;

    z-index: -1;
    div {
      pointer-events: none;
      position: absolute;
      height: 100%;
      width: 38%;
      border-radius: 100%;
      background-color: #9a6130;
      transform: scale(1.8) translateY(126%) translateZ(0);
      transition: all 700ms ease;
      &:nth-child(1) {
        left: -5%;
      }
      &:nth-child(2) {
        left: 30%;
        transition-delay: 90ms;
      }
      &:nth-child(3) {
        left: 66%;
        transition-delay: 25ms;
      }
    }
  }
  /* cursor: pointer;
  background-color: none;
  text-align: center;
  font-family: var(--ff-primary);
  font-size: clamp(1rem, 1vw, 6rem);
  font-weight: 500;
  border: 3px solid #9a6130;
  border-radius: 4px;
  padding: 1.4em 1em;
  width: 40%;
  min-width: 100px;
  position: relative;
  margin-top: 5%;
  margin-left: 15%;
  color: #9a6130;

  &::before {
    position: absolute;
    pointer-events: none;
    left: 120%;
    font-size: clamp(0.9rem, 0.5vw, 5rem);
    width: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 200;
    color: black;
    width: 80%;
    min-width: 100px;
    content: 'Lorem ipsum dolor sit amet,
consetetu';
  }

  &:hover {
    color: #fff;
    .c-button__blobs {
      div {
        transform: scale(1.4) translateY(0) translateZ(0);
      }
    }
  }
  .gooeyE {
    position: relative;
    border: 1px solid red;
    div {
      pointer-events: none;
      position: absolute;
      height: 4em;
      width: 40%;
      border-radius: 50%;
      background-color: pink;
     
    }
  } */
`;

export const BlobsContainer = styled(motion.div)``;

export const Blob = styled(motion.div)``;

export const SvgInner = styled.div`
  position: absolute;
  bottom: -0.15%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 15.36vh;
  }

  path {
    fill: #111112;
  }
`;
export const SvgWave = styled.div`
  margin-top: 15em;
`;
