import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/global.css';

import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;