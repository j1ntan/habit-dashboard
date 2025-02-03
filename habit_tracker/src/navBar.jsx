import React from "react"
import { Link } from "react-router-dom";
import { MdAnalytics, MdHeight, MdWidthNormal } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";


const Navbar = () => {
  const navStyle = {
    color:"white",
    backgroundColor: "black",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const iconStyle ={
    margin: "0px",
    padding: "0px",
  }

  const logoStyle = {
    marginLeft: "24px",
    fontSize: "24px",
    fontWeight: "bold",
  }

  const navItemsStyle = {
    display: "flex",
    gap: "40px",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  }

  const profileSectionStyle = {
    marginTop: "1px",
    display: "flex",
    gap: "35px",
    alignItems: "center",
  }

  const buttonStyle = {
    marginTop: "0px",
    marginBotton: "0px",
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
        <div style={profileSectionStyle}>
        <MdOutlineDashboard className="icons" style={iconStyle} />
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
        <MdAnalytics className="icons" style={iconStyle}/>
        <Link to="/analytics" style={linkStyle}>
          Analytics
        </Link>
        <FaRegCalendarAlt className="icons" style={iconStyle} />
        <Link to="/calendar" style={linkStyle}>
          Calendar
        </Link>
        <CgProfile className="icons" style={iconStyle} />
        <Link to="/profile" style={linkStyle}>
          Profile
        </Link>
        </div>
        <button style={buttonStyle} onClick={() => alert("Logged out!")} >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar

