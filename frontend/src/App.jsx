import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateDaily from "./pages/CreateDaily";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createContext, useState } from "react";
import Daily from "./pages/Daily";
import DetailDaily from "./pages/DetailDaily";
import Main from "./pages/Main";

function App() {
  // const DailyContext = createContext();

  const [isAuth, setIsAuth] = useState();
  const [postData, setPostData] = useState([]);

  return (
    <>
      {/* <DailyContext.Provider> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
      {/* </DailyContext.Provider> */}
    </>
  );
}

export default App;
