import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateDaily from "./pages/CreateDaily";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import Daily from "./pages/Daily";
import DetailDaily from "./pages/DetailDaily";

function App() {
  const [isAuth, setIsAuth] = useState();
  const [postData, setPostData] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createDaily"
            element={<CreateDaily setPostData={setPostData} />}
          />
          <Route
            path="/home"
            element={<Home postData={postData} isAuth={isAuth} />}
          />
          <Route path="/daily/edit/:id" element={<Daily />} />
          <Route path="/daily/:id" element={<DetailDaily />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
