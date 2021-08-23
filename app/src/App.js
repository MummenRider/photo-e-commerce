import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";
import { useMediaQuery } from "react-responsive";
import * as ROUTES from "Constants/route";
import { useWindowSize } from "Hooks/useWindowSize";
import { AppContainer, MomentumScroll } from "global.styles";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { NavbarContainer } from "Containers/navbar-container";

const App = () => {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1024px)" });
  const size = useWindowSize();
  const scrollRef = useRef();
  const data = useMemo(
    () => ({
      ease: 0.08,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  );
  console.log(data.current);
  const momentumScoll = useCallback(() => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    scrollRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    requestAnimationFrame(() => momentumScoll());
  }, [data]);

  const setBodyHeight = useCallback(() => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
    }px`;
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => momentumScoll());
    console.log("hi");
    return () => cancelAnimationFrame(() => momentumScoll());
  }, [momentumScoll]);

  useEffect(() => {
    console.log("hello");
    setBodyHeight();
  }, [size.height, size.width, setBodyHeight]);

  return (
    <AppContainer>
      <Router>
        {/* <NavbarContainer /> */}
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
