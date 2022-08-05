import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataBoba } from "./API/DummyAPI";

import OrderPages from "./pages/orderPages";
import LandingPage from "./pages/Landingpages";
import Login from "./components/inputForm/Login";

import AddProduct from "./pages/addProduct/AddProduct";
import AddTopping from "./pages/addProduct/AddTopping";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Income from "./components/Income";
import Cart from "./pages/Cart";


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
          <Route path="/Detail/:id" element={<Detail data={DataBoba} />} />
          <Route path="/Income" element={<Income />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
