import "./App.css";
import BlogLandingPage from "./Pages/BlogLandingPage";
import Landing_page from "./Pages/Landing_page";
import Registration_Page from "./Pages/Registration_Page";
import BlogPage from "./Pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import { Not_found } from "./Components/Not_found";
import { useState } from "react";
import { redirect } from "react-router-dom";
function App() {
  const [authenticated, setauthenticated] = useState(false);
  console.log(localStorage.getItem("authTokens"));

  if (localStorage.getItem("authTokens") === "true") {
    setauthenticated(true);
  }
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing_page />}></Route>
        <Route
          path="/Account_Page"
          element={<Registration_Page xy={setauthenticated} />}
        ></Route>
        {authenticated ? (
          <Route path="/BuildByBlock">
            <Route index element={<BlogLandingPage />} />
            <Route path="BlogPage" element={<BlogPage />}></Route>
            <Route path="AddBlog" element={<AddBlog />}></Route>
          </Route>
        ) : (
          () => {
            redirect("/buildbyblock");
          }
        )}
        <Route path="*" element={<Not_found />}></Route>
      </Routes>
    </div>
  );
}

export default App;
