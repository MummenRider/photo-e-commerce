import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  color: white;
  /* display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  } */
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  margin: 0 auto;
  padding: 5em 0;

  @media screen and (min-width: 768px) {
    padding: 20% 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1300px) {
    flex-direction: row;
    padding: 8rem 0;
    width: 80%;
    margin: 0 auto;
    gap: 10%;
  }
`;

export const Frames = styled.div`
  width: 100vw;
  @media screen and (min-width: 1300px) {
    width: 30vw;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 98.5981%;
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 6rem 0;
  }
`;
export const Title = styled.h3`
  font-size: clamp(4rem, 5vw, 36rem);
  text-align: center;
  font-weight: 300;
  padding: 10rem 0;
  @media screen and (min-width: 1300px) {
    text-align: left;
    padding: 2rem 0;
  }
`;

export const Description = styled.p`
  font-size: clamp(1.5rem, 0.9vw, 6rem);
  font-weight: 100;
  padding: 1rem 0;
  line-height: 1.8;
  text-align: left;
`;
