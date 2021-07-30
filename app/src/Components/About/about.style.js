import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #111112;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    min-height: 912px;
    padding: 8rem 0;
    width: 80%;
    margin: 0 auto;
    gap: 30px;
    > * {
      flex-basis: 100%;
    }

    @media screen and (min-width: 1268px) {
      gap: 100px;
    }
  }
`;

export const Frames = styled.div`
  height: 80vh;
  min-height: 700px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    filter: brightness(75%);
    background-position: 25% 100%;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
`;
export const Title = styled.h3`
  font-size: clamp(3rem, 6vw, 7rem);
  text-align: center;
  font-weight: 300;
  padding: 4rem 0;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  font-size: clamp(1.5rem, 1.5vw, 1.8rem);
  font-weight: 100;
  padding: 1rem 0;
  line-height: 22px;
  text-align: left;

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
