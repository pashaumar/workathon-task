import "./App.css";
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Resgister";
import Admin from "./components/admin/Admin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <Route path={ROUTES.ADMIN} component={Admin} />
          <Route path="/" exact render={() => <Redirect to={ROUTES.LOGIN} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
