import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "../Profile/Posts";
import { UserProfile } from "../Profile/UserProfile";

const userRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/profile/user" component={UserProfile} />
          <Route path="/profile/posts" component={Posts} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default userRoutes;
