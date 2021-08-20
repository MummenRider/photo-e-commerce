import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  background-color: white;
  padding: 8% 0;
  position: relative;
  &::before {
    content: "";
    display: ${(props) => (props.isMobile ? "block" : "none")};
    position: absolute;
    top: -1%;
    left: 50%;
    transform: translate(-50%, 1%);
    width: 0;
    height: 0;
    border-top: 7vh solid #dbd8c7;
    border-left: 3.5vh solid transparent;
    border-right: 3.5vh solid transparent;
  }
`;
export const Left = styled.div`
  color: black;
`;
export const Right = styled.div``;
export const Title = styled.h1``;
export const SubTitle = styled.p``;
export const List = styled.ul``;
export const Item = styled.span``;
export const Image = styled.div``;
export const ContactBtn = styled.button``;
