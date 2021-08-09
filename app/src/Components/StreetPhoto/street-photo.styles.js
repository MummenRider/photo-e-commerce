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

  @media screen and (max-width: 380px) {
    max-height: 10px;
    border: 1px solid red;
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
  height: 38%;
  width: fit-content;
  top: 1%;
  left: 8%;

  @media screen and (max-width: 1375px) {
    height: 35%;
  }

  @media screen and (max-width: 1230px) {
    height: 30%;
    top: 5%;
  }

  @media screen and (max-width: 1130px) {
    height: 28%;
    top: 8%;
  }
`;

export const ImageBlockTwo = styled.div`
  position: absolute;
  height: 30%;
  width: fit-content;
  top: 10%;
  right: 8%;

  @media screen and (max-width: 1375px) {
    height: 28%;
  }

  @media screen and (max-width: 1230px) {
    height: 24%;
  }

  @media screen and (max-width: 1130px) {
    height: 22%;
    top: 13%;
  }
`;
export const ImageBlockThree = styled.div`
  position: absolute;
  width: fit-content;
  height: 350px;
  bottom: 0;
  left: 8%;

  @media screen and (max-width: 1375px) {
    height: 320px;
  }

  @media screen and (max-width: 1230px) {
    height: 310px;
  }

  @media screen and (max-width: 1130px) {
    height: 290px;
    bottom: 13%;
  }
`;
export const ImageBlockFour = styled.div`
  position: absolute;
  width: fit-content;
  height: 500px;
  bottom: 10%;
  right: 8%;

  @media screen and (max-width: 1375px) {
    height: 490px;
  }

  @media screen and (max-width: 1230px) {
    height: 400px;
  }

  @media screen and (max-width: 1130px) {
    height: 350px;
    bottom: 30%;
  }
`;
