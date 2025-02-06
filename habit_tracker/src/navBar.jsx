import React from "react"
import { Link } from "react-router-dom";
import { MdAnalytics, MdHeight, MdWidthNormal } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import Profile from './pages/profile.jsx';
import { useState } from 'react';


const Navbar = () => {
  const navigate = useNavigate();
  const navStyle = {
    color: "white",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const iconStyle = {
    margin: "0px",
    padding: "0px",
  }

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    height :'100%',
    marginLeft: '25px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  }

  const navItemsStyle = {
    display: "flex",
    gap: "40px",
    height: "100%",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  }

  const profileSectionStyle = {
    display: "flex",
    gap: "2vw",
    alignItems: "center",
    height: "100%",
  }

  const buttonStyle = {
    alignSelf: "center",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    height:"65%",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginRight: "25px",
  }

  const [showprofile, setshowprofile] = useState(false);
  const handleOpenProfile = () => {
    if (showprofile) { setshowprofile(false); }
    else {
      setshowprofile(true);
    }
  };

  const handleCloseProfile = () => {
    setshowprofile(false);
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Habit Tracker</div>
      <div style={navItemsStyle}>
        <div style={profileSectionStyle}>
          <Link to="/dashboard" style={linkStyle}>
            <MdOutlineDashboard className="icons" style={iconStyle} />
            Dashboard
          </Link>
          <Link to="/analytics" style={linkStyle}>
            <MdAnalytics className="icons" style={iconStyle} />
            Analytics
          </Link>
          <Link to="/calendar" style={linkStyle}>
            <FaRegCalendarAlt className="icons" style={iconStyle} />
            Calendar
          </Link>
          <span style={{ ...linkStyle, cursor: "pointer", position: 'relative' }} onClick={handleOpenProfile}>
            <CgProfile className="icons" style={iconStyle} />
            Profile
          </span>
          
        </div>
        <button style={buttonStyle} onClick={() => navigate("../login")} >
          Logout
        </button>
        <Profile show={showprofile} onClose={handleCloseProfile}></Profile>
      </div>
    </nav>
  )
}

export default Navbar

