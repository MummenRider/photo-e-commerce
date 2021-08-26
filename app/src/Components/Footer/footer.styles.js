import styled from "styled-components";

export const Container = styled.footer`
  color: whitesmoke;
  padding: 10% 0 1% 0;
  @media screen and (min-width: 500px) {
    padding: 3% 0 1% 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div``;

export const SocialMedias = styled.div``;
export const SiteMap = styled.div`
  margin-right: 5%;
`;

export const Description = styled.p`
  font-family: var(--ff-primary);
  font-weight: 200;
  font-size: clamp(1rem, 0.7vw, 5rem);
  line-height: 1.5;
  padding-right: 5em;
`;

export const TitleDescription = styled.p`
  font-family: var(--ff-primary);
  font-weight: 200;
  font-size: clamp(1rem, 0.7vw, 5rem);
  margin: 2em 0;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(4rem, 3vw, 20rem);
  font-weight: lighter;
  padding-top: 1em;
  border-bottom: 1px solid white;
`;

export const CopyRight = styled.span`
  font-family: var(--ff-primary);
  margin-top: 5em;
  font-weight: 200;
  font-size: clamp(1rem, 0.7vw, 5rem);
`;
