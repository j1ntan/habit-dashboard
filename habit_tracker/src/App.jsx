import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SignUp from './pages/SignUp.jsx'
import './index.css';
import Header from "./myComponents/Header";
import Calendar from "./MyComponents/Calendar.jsx";


function App() {
  return (
    <>
    <Dashboard />
    </>
  );

}

export default App
