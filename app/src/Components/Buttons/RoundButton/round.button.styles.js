import styled from "styled-components/macro";

export const ButtonContainer = styled.div`
  cursor: pointer;
  svg {
    transform: rotate(${(props) => props.rotate});
  }
`;
