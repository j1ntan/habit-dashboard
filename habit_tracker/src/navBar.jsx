import React from "react"
import { Link } from "react-router-dom";
import { MdAnalytics, MdHeight, MdWidthNormal } from "react-icons/md";
import {useNavigate} from "react-router-dom";


const Navbar = () => {
  const navigate= useNavigate();
  const navStyle = {
    color:"black",
    backgroundColor: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const iconStyle ={
    
  }

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  }

  const navItemsStyle = {
    display: "flex",
    gap: "20px",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
  }

  const profileSectionStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }

  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  }

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Habit Tracker</div>
      <div style={navItemsStyle}>
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
        <MdAnalytics className="icons" style={iconStyle}/>
        <Link to="/analytics" style={linkStyle}>
          Analytics
        </Link>
        <Link to="/calendar" style={linkStyle}>
          Calendar
        </Link>
        <Link to="/habits" style={linkStyle}>
          Habits
        </Link>
      </div>
      <div style={profileSectionStyle}>
        <Link to="/profile" style={linkStyle}>
          Profile
        </Link>
        <button style={buttonStyle} onClick={() => navigate("../login")} >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar

