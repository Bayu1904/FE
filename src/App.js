import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OrderPages from "./pages/orderPages";
import LandingPage from "./pages/Landingpages";
import Login from "./components/inputForm/Login";

function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/orderPages" element={<OrderPages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
