import "./App.css";
import BlogLandingPage from "./Pages/BlogLandingPage";
import Landing_page from "./Pages/Landing_page";
import Registration_Page from "./Pages/Registration_Page";
import BlogPage from "./Pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import { Not_found } from "./Components/Not_found";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing_page />}></Route>
        <Route path="/Account_Page" element={<Registration_Page />}></Route>
        <Route path="/BuildByBlock">
          <Route index element={<BlogLandingPage />} />
          <Route path="BlogPage" element={<BlogPage />}></Route>
          <Route path="AddBlog" element={<AddBlog />}></Route>
        </Route>
        <Route path="*" element={<Not_found />}></Route>
      </Routes>
    </div>
  );
}

export default App;
