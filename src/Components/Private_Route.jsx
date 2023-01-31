import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const Xauthenticated = React.createContext();
export const Private_Route = ({ children }, props) => {
  const [authenticated, setauthenticated] = useState(false);
  if (!authenticated) {
    console.log("Taha");
    // not logged in so redirect to login page with the return url
    return (
      <Xauthenticated.Provider value={setauthenticated}>
        <Navigate to="/Account_Page" />
      </Xauthenticated.Provider>
    );
  }

  // authorized so return child components
  return (
    <Xauthenticated.Provider value={setauthenticated}>
      {children}
    </Xauthenticated.Provider>
  );
};
