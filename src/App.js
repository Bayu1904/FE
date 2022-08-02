import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import List from "./components/List";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
