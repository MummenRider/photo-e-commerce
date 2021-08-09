import styled from "styled-components";

export const Frame = styled.section`
  width: 100%;
  background-color: var(--bg-secondary);
  padding: 5rem 0;
`;

export const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  align-items: ${(prop) => prop.position};
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(3.5rem, 4vw, 5rem);
  font-style: italic;
  font-weight: lighter;
  letter-spacing: 3px;
`;

export const Subtitle = styled.h1`
  font-family: var(--ff-primary);
  letter-spacing: 1.5px;
  font-weight: 200;
  padding: 2rem 0;
`;

export const ImageFrame = styled.div`
  width: ${(props) => props.width};
  padding-top: 6rem;
`;

export const Button = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin-top: 5rem;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  gap: 30px;
`;

export const ButtonText = styled.span`
  color: white;
  font-family: var(--ff-primary);
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  font-weight: lighter;
`;

export const ButtonIcon = styled.svg`
  margin-top: 3px;
`;

export const ButtonIconPath = styled.path`
  fill: white;
`;
