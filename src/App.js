import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/global.css';

import { Login }  from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;