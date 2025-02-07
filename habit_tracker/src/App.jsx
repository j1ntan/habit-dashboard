import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/profile.jsx';
import Analytics from './pages/analytics.jsx';
import NotFound from './pages/notFound.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />}/>        
      </Routes>
    </Router>
  );

}

export default App
