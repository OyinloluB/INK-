import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signupform from "../Forms/Signupform";
import Signinform from "../Forms/Signinform";

export const authRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/user/signup" component={Signupform} />
          <Route path="/user/signin" component={Signinform} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
