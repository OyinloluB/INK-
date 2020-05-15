import React from "react";
import { Route} from "react-router-dom";
import Signupform from "../Forms/Signupform";
import Signinform from "../Forms/Signinform";

export const authRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/user/signup" component={Signupform} />
      <Route path="/user/signin" component={Signinform} />
    </React.Fragment>
  );
};
