import React from "react";
import { Route, Redirect } from "react-router-dom";
const AuthBook = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem("bookDetails") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default AuthBook;
