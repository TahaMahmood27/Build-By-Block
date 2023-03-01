import "./App.css";
import Landing_page from "./Pages/Landing_page";
import Registration_Page from "./Pages/Registration_Page";
import BlogPage from "./Pages/BlogPage";
import { Route, Router, Routes } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import { Not_found } from "./Components/Not_found";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import BlogLandingPage from "./Pages/BlogLandingPage";
import Document_Uploading from "./Components/Document_Uploading";

function App() {
  const [authenticated, setauthenticated] = useState(false);
  function authentication() {
    try {
      const getData = jwt_decode(localStorage.getItem("authTokens"));
      setauthenticated(true);
    } catch (error) {}
  }

  useEffect(() => {
    authentication();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="" element={<Landing_page />}></Route>

        <Route path="/Account_Page" element={<Registration_Page />} />
        {authenticated && (
          <Route path="/BuildByBlock">
            <Route index element={<BlogLandingPage />} />
            <Route path="BlogPage/:BlogID" element={<BlogPage />}></Route>
            <Route path="AddBlog" element={<AddBlog />}></Route>
            <Route
              path="DocumentUploading"
              element={<Document_Uploading />}
            ></Route>
          </Route>
        )}

        <Route path="*" element={<Not_found />}></Route>
      </Routes>
    </div>
  );
}

export default App;
