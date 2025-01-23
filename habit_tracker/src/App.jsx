import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );

}

export default App
