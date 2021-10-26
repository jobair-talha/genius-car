import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
