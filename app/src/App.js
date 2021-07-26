import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";

import * as ROUTES from "Constants/route";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default App;
