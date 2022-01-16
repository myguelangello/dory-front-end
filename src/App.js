import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login }  from "./pages/Login";
import { Register } from "./pages/Register";
import { RegisterStudent } from "./pages/RegisterStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerStudent" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}

export default App;