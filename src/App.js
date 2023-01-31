import "./App.css";
import BlogLandingPage from "./Pages/BlogLandingPage";
import Landing_page from "./Pages/Landing_page";
import Registration_Page from "./Pages/Registration_Page";
import BlogPage from "./Pages/BlogPage";
import { Route, Router, Routes } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import { Not_found } from "./Components/Not_found";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Private_Route } from "./Components/Private_Route";
function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing_page />}></Route>

        <Route
          path="/Account_Page"
          element={
            <Private_Route>
              <Registration_Page />
            </Private_Route>
          }
        />

        <Route path="/BuildByBlock">
          <Route
            index
            element={
              <Private_Route>
                <BlogLandingPage />
              </Private_Route>
            }
          />
          <Route
            path="BlogPage"
            element={
              <Private_Route>
                <BlogPage />
              </Private_Route>
            }
          ></Route>
          <Route
            path="AddBlog"
            element={
              <Private_Route>
                <AddBlog />
              </Private_Route>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Not_found />}></Route>
      </Routes>
    </div>
  );
}

export default App;
