import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  position: relative;
  height: 160vh;
  min-height: 1500px;
  margin: 300px auto;

  @media screen and (max-width: 1040px) {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  max-width: 60rem;
  min-width: 30rem;
  padding: 5rem 0;
  z-index: 5;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(2.5rem, 4vw, 5rem);
  font-weight: 200;
  padding: 4rem 0;
  line-height: 1.5;
`;

export const SubTitle = styled.span`
  font-family: var(--ff-primary);
  font-weight: lighter;
  font-size: clamp(1.3rem, 0.93vw, 2.5rem);
  letter-spacing: 2px;
`;

export const ImageBlockOne = styled.div`
  position: absolute;
  height: 24%;
  width: fit-content;
  top: 200px;
  left: 150px;

  @media screen and (max-width: 1375px) {
    height: 22%;
  }

  @media screen and (max-width: 1230px) {
    height: 20%;
  }

  @media screen and (max-width: 1130px) {
    height: 18%;
  }
`;

export const ImageBlockTwo = styled.div`
  position: absolute;
  height: 18%;
  width: fit-content;
  top: 50px;
  right: 100px;

  @media screen and (max-width: 1375px) {
    height: 16%;
  }

  @media screen and (max-width: 1230px) {
    height: 14%;
  }

  @media screen and (max-width: 1130px) {
    height: 12%;
  }
`;
export const ImageBlockThree = styled.div`
  position: absolute;
  width: fit-content;
  height: 18%;
  bottom: 200px;
  left: 100px;

  @media screen and (max-width: 1375px) {
    height: 16%;
  }

  @media screen and (max-width: 1230px) {
    height: 14%;
    bottom: 300px;
  }

  @media screen and (max-width: 1130px) {
    height: 12%;
    bottom: 400px;
  }
`;
export const ImageBlockFour = styled.div`
  position: absolute;
  width: fit-content;
  height: 24%;
  bottom: 300px;
  right: 100px;

  @media screen and (max-width: 1375px) {
    height: 22%;
  }

  @media screen and (max-width: 1230px) {
    height: 20%;
    bottom: 420px;
  }

  @media screen and (max-width: 1130px) {
    height: 18%;
  }
`;
