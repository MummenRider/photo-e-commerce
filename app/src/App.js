import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";
import { useMediaQuery } from "react-responsive";

import * as ROUTES from "Constants/route";
import { useWindowSize } from "Hooks/useWindowSize";
import { AppContainer, MomentumScroll } from "global.styles";
import { useRef, useEffect } from "react";
import { NavbarContainer } from "Containers/navbar-container";

const App = () => {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1024px)" });
  const size = useWindowSize();
  const scrollRef = useRef(null);
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
    }px`;
  };

  const data = {
    ease: 0.08,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const momentumScoll = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    scrollRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    requestAnimationFrame(() => momentumScoll());
  };

  useEffect(() => {
    requestAnimationFrame(() => momentumScoll());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  return (
    <AppContainer>
      <Router>
        <NavbarContainer />
        <Switch>
          <MomentumScroll ref={scrollRef}>
            <Route path={ROUTES.HOME} exact>
              <Home isBigDevice={isBigDevice} />
            </Route>
          </MomentumScroll>
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
