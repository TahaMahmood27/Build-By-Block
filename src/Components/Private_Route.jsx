import React from "react";
import { Route, Redirect, redirect } from "react-router-dom";

export const Private_Route = (children, ...rest) => {
  const authenticated = false;
  return (
    <Route {...rest}>
      {!authenticated
        ? () => {
            return redirect("/accountpage");
          }
        : children}
    </Route>
  );
};
