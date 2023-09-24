import React from "react";

import App from "App";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "global.styles";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "Hooks/scrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
