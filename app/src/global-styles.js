import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: lust-sans, sans-serif;
  --bg-primary: #111112;
  --bg-secondary: #151515;
}

html {
  font-size: 62.5%;
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

`;
