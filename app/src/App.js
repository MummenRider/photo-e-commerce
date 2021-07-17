import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";

import * as ROUTES from "Constants/route";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
