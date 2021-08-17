import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`

:root {
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: lust-sans, sans-serif;
  --bg-primary: #111112;
  --bg-secondary: #151515;
  scrollbar-width: thin;
}

html {
  font-size: 62.5%;
  scroll-behavior:smooth;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;

}

body {
  background: var(--bg-primary);
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-thumb {
  background-color:rgb(117 114 114);
  border-radius:25px;

}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
 
}
`;

export const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const MomentumScroll = styled.div``;
