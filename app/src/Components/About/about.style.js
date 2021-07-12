import styled from "styled-components";

export const DescriptionTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding: 4rem 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 1224px) {
    font-size: 5rem;
    font-weight: 300;
  }

  @media screen and (min-width: 1224px) {
    font-size: 7rem;
    font-weight: 300;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  padding: 1rem 0;
  line-height: 20px;
  text-align: justify;
  @media screen and (min-width: 1224px) {
    font-size: 1.6rem;
    font-weight: 100;
    line-height: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.8rem;
    line-height: 30px;
  }
`;

export const AboutImage = styled.div`
  height: 80vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-image: url(${(props) => props.bkgImg});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    filter: brightness(75%);
    background-position: 25% 100%;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    min-height: 912px;
    padding: 8rem 0;
    width: 80%;
    margin: auto;
    gap: 30px;
    > * {
      flex-basis: 100%;
    }
    & ${DescriptionTitle}:nth-child(1) {
      display: none;
    }
  }

  @media screen and (min-width: 1268px) {
    gap: 100px;
  }
`;

export const AboutDescription = styled.div`
  width: 80%;
  margin: 0 auto;
  & ${DescriptionTitle}:nth-child(1) {
    display: none;
  }

  & ${DescriptionParagraph}:nth-child(2) {
    padding-top: 3rem;
  }

  @media screen and (min-width: 768px) {
    & ${DescriptionTitle}:nth-child(1) {
      display: block;
    }
  }
`;

export const AboutContainer = styled.section`
  background-color: #111112;
  font-family: "Montserrat", sans-serif;
  color: white;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: 912px;
  }
`;

export const AboutCircleImage = styled.div``;
