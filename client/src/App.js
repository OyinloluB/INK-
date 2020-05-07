import React from "react";
import "../src/dist/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { authRoutes } from "./Components/Routes/authRoutes";
import userRoutes from "./Components/Routes/userRoutes";
import { Home } from "./Components/General/Home";
import Navbar from "./Components/Layouts/Navbar";
import { Alerts } from "./Components/Layouts/Alerts";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import PostState from "./context/Post/PostState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <div>
        <Router>
          <AlertState>
            <PostState>
              <Alerts />
              {/* <Navbar /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={authRoutes} />
                <Route path="/profile" component={userRoutes} />
              </Switch>
            </PostState>
          </AlertState>
        </Router>
      </div>
    </AuthState>
  );
};

export default App;
