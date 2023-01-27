import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Private_Route = (children, ...rest) => {
  const authenticated = false;
  return (
    <Route {...rest}>
      {!authenticated ? <Redirect to="/login" /> : children}
    </Route>
  );
};
