import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
// import List from "./components/List";
import LandingPage from "./pages/Landingpages";
import Login from "./components/inputForm/Login";
import AddProduct from "./pages/addProduct/AddProduct";
import AddTopping from "./pages/addProduct/AddTopping";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/AddTopping" element={<AddTopping />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
