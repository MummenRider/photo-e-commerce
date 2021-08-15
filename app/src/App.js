import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";
import { useMediaQuery } from "react-responsive";

import * as ROUTES from "Constants/route";
import { useWindowSize } from "Hooks/useWindowSize";
const App = () => {
  const isBigDevice = useMediaQuery({ query: "(min-width: 1024px)" });
  const size = useWindowSize();
  console.log(size);
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home isBigDevice={isBigDevice} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
