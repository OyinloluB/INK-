import React from "react";
import { Route } from "react-router-dom";
import Posts from "../Profile/Posts";
import { UserProfile } from "../Profile/UserProfile";

const userRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/profile/user" component={UserProfile} />
      <Route path="/profile/posts" component={Posts} />
    </React.Fragment>
  );
};

export default userRoutes;
