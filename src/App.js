import "./App.css";
import BlogLandingPage from "./BlogLandingPage";
import Landing_page from "./Landing_page";
import Registration_Page from "./Registration_Page";
import BlogPage from "./BlogPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page />}></Route>
        <Route path="/Account_Page" element={<Registration_Page />}></Route>
        <Route path="/Home" element={<BlogLandingPage />}></Route>
        <Route path="/BlogPage" element={<BlogPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
