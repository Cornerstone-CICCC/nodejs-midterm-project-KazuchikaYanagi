import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateDaily from "./pages/CreateDaily";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Daily from "./pages/Daily";
import DetailDaily from "./pages/DetailDaily";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createDaily" element={<CreateDaily />} />
          <Route path="/home" element={<Home />} />
          <Route path="/daily/edit/:id" element={<Daily />} />
          <Route path="/daily/:id" element={<DetailDaily />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
