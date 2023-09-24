import styled from "styled-components/macro";

export const Container = styled.section`
  padding-block: ${(props) => (props.isBlockPadded ? "min(25%, 6em)" : 0)};
  display: grid;
  grid-template-columns: ${(props) =>
    props.isInlinePadded && "minmax(1em, 1fr) 22fr minmax(1em,1fr)"};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  overflow: hidden;
  z-index: 1;
  @media (min-width: 48em) {
    padding-block: ${(props) => (props.isBlockPadded ? "10%" : 0)};
  }
`;

export const Inner = styled.div`
  grid-column: ${(props) => (props.isInlinePadded ? 2 : 1)};
  display: grid;
`;

export const Frame = styled.div`
  //grid-column: 2;
  //display: ${(props) => props.isEven && "flex"};
  display: grid;

  place-content: ${(props) => props.alignItems};
  padding-block: ${(props) => props.paddingBlock};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
`;

export const ListItem = styled.li`
  font-family: var(--ff-primary);
  font-weight: 300;
  letter-spacing: 0.025rem;
  line-height: 1.8;
  font-size: clamp(0.938rem, 1.1vw, 1.25rem);
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  cursor: pointer;
  @media (min-width: 48em) {
    font-size: clamp(0.415rem, 0.9vw, 1.4rem);
  }
  @media (min-width: 67.5em) {
    line-height: 2;
  }
`;
