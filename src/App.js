import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OrderPages from "./pages/orderPages";
import LandingPage from "./pages/Landingpages";
import Login from "./components/inputForm/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/product-detail/:id" element={<OrderPages />} />
          <Route path="/myOrder" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
