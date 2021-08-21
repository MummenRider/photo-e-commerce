import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 8% 0;
  position: relative;
  flex-wrap: wrap;
  &::before {
    content: "";
    display: ${(props) => (props.isMobile ? "block" : "none")};
    position: absolute;
    top: -1%;
    left: 50%;
    transform: translate(-50%, 1%);
    width: 0;
    height: 0;
    border-top: 6vh solid #dbd8c7;
    border-left: 3vh solid transparent;
    border-right: 3vh solid transparent;
  }

  & > * {
    flex: 1 0 50%;
  }
`;

export const Left = styled.div`
  color: black;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  padding-left: 10%;
  & > * {
    width: min(75%, 30rem);
  }

  @media screen and (min-width: 1200px) {
    padding-left: 0;
  }
`;

export const Right = styled.div`
  border: 1px solid blue;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 4rem;
  font-weight: lighter;
  padding: 5rem 0 0.5rem 0;
  text-align: left;
  line-height: 1.2;
`;

export const SubTitle = styled.p`
  font-family: var(--ff-primary);
  font-size: 1.3rem;
  text-align: left;
  align-self: left;

  span {
    color: #9a6130;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  font-family: var(--ff-primary);
  counter-reset: counterName;
`;

export const Item = styled.p`
  font-size: 12px;
  font-weight: 200;
  margin: 3rem 0;
  position: relative;

  &::before {
    counter-increment: counterName;
    content: "0" counter(counterName) ". ";
    font-size: 10px;
    position: absolute;
    left: -18%;

    @media screen and (min-width: 768px) {
      left: -25%;
    }
  }
`;

export const Image = styled.div``;
export const ContactBtn = styled.button``;
