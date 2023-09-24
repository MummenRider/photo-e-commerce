import styled from "styled-components/macro";

export const Container = styled.footer`
  color: #fbf8f4;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-rows:
    minmax(0, 1.563em)
    1fr;
  background-color: var(--bg-primary);
  @media (min-width: 48em) {
    margin-inline: auto;
    grid-template-rows:
      minmax(0, 3.125em)
      1fr;
  }
`;

export const TitleContainer = styled.div`
  width: clamp(9.625rem, 33vw, 33.5rem);
  text-align: center;
  padding: 1em 0;
  background: var(--bg-secondary);
  place-self: start center;
  grid-row: 1;
  grid-column: 1;
  z-index: 1;

  @media (min-width: 48em) {
    padding: 2.25em 0;
  }
`;

export const Content = styled.div`
  background: var(--bg-secondary);
  @media (min-width: 48em) {
    padding: 0 2em;
  }
`;

export const ContentInner = styled.div`
  max-width: 1640px;
  padding: 3.125em 0;
  grid-row: 2;
  grid-column: 1;
  font-family: var(--ff-third);
  font-weight: light;
  font-size: clamp(0.75rem, 0.8vw, 0.875rem);

  text-align: center;
  width: 100%;

  @media (min-width: 48em) {
    /* display: flex;
    align-items: center;
    place-content: center space-between;
    margin-inline: auto;
    flex-basis: 25%;
    flex-grow: 0; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    margin-inline: auto;
  }
`;

export const Title = styled.p`
  font-family: var(--ff-fifth);
  font-size: clamp(0.938rem, 1.2vw, 1.25rem);
  font-weight: 500;
  letter-spacing: 0.05em;
`;

export const SocialMediasContainer = styled.li`
  padding: 3.125em 0em;
  display: flex;
  gap: 2em;
  justify-content: center;

  @media (min-width: 48em) {
    grid-column: 2;
    grid-row: 1;
    gap: 3em;
  }
`;

export const SocialMedia = styled.a`
  cursor: pointer;
  svg {
    stroke: #313b41;
    fill: var(--bg-primary);
    height: 25px;
    width: 25px;
    stroke-width: 0.1px;
  }
`;

export const NamesContainer = styled.div`
  opacity: 0.9;

  display: grid;
  gap: 1.5em;
  @media (min-width: 48em) {
    place-self: center start;
    text-align: start;
    grid-column: 1;
  }
`;

export const Owner = styled.p``;

export const Developer = styled.p``;

export const BackOnTopContainer = styled.div`
  background: var(--bg-secondary);
  text-align: center;
  padding: 3.125em 0;

  cursor: pointer;
  @media (min-width: 48em) {
    grid-column: 3;
    place-self: center end;
    grid-row: 1;
  }
`;
