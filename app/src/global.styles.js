import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
export const GlobalStyles = createGlobalStyle`

:root {
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: cormorant-garamond, serif;;
  --ff-third: brandon-grotesque, sans-serif;
  --ff-fourth: owners, sans-serif;
  --ff-fifth: elza-narrow, sans-serif;
  --ff-sixth: filmotype-lacrosse, sans-serif;
  --ff-seventh: brandon-grotesque-light, sans-serif;
  
  --bg-primary: #FFFDF9;
  --bg-secondary: #313B41;
  --bg-third: #AD8B73;
  --bg-fourth: #F5EDDC;

}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body{
  overscroll-behavior:none;  
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-primary);
 }
 
 a,
a:link,
a:visited,
a:hover,
a:active {
    color: inherit; /*color of your choosing*/
    text-decoration: none;
    font-weight: normal;
}

ul, li{
  all: unset;
}
`;
