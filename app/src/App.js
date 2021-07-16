import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home/home";
import Navbar from "Components/Navbar/navbar";
import { NavBackgroundProvider } from "context/navbar-context";

const App = () => {
  return (
    <NavBackgroundProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </NavBackgroundProvider>
  );
};

export default App;
