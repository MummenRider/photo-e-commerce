import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 238, 236);
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  color: black;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
`;

export const Right = styled.div`
  border: 1px solid blue;
  width: 10vw;
`;
export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: 125%;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
`;

export const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: clamp(3.4rem, 3.5vw, 22rem);
  font-weight: lighter;
  padding: 5rem 0 0.5rem 0;
  text-align: left;
  line-height: 1.2;
`;

export const SubTitle = styled.p`
  font-family: var(--ff-primary);
  font-size: clamp(1.3rem, 1vw, 7rem);
  margin-bottom: 3em;
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
  font-size: clamp(1rem, 0.8vw, 5.2rem);
  font-weight: 200;
  margin: 2em 0;
  position: relative;
  left: 10%;
  padding-left: 2em;
  &::before {
    counter-increment: counterName;
    content: "0" counter(counterName) ". ";
    font-size: clamp(1rem, 0.8vw, 4.5rem);
    position: absolute;
    left: -10%;
  }
`;

export const Wrapper = styled.div``;

export const ContactBtn = styled.button`
  cursor: pointer;
  background-color: #9a6130;
  border: none;
  font-family: var(--ff-primary);
  font-size: clamp(1rem, 0.8vw, 6rem);
  font-weight: 400;
  padding: 1.4em 1em;
  width: 40%;
  min-width: 110px;
  position: relative;
  margin-top: 5%;
  margin-left: 4.5em;
  box-shadow: rgba(17, 17, 26, 0.33) 0px 4px 16px,
    rgba(17, 17, 26, 0) 0px 8px 32px;

  &::before {
    position: absolute;
    left: 120%;
    font-size: clamp(0.8rem, 0.5vw, 5rem);
    width: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 200;
    content: "Lorem ipsum dolor sit amet,
consetetu";
  }
`;

export const SvgInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 15.36vh;
  }

  path {
    fill: #111112;
  }
`;
export const SvgWave = styled.div`
  margin-top: 15em;
`;
