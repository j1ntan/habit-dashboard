import React, { useState } from "react";
import styles from '../MyComponents/navBar.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Modal from '../component/modalAddaHabit.jsx'
import Addahabit from '../pages/addahabit.jsx';
import Profile from '../pages/profile.jsx';
import { CgProfile } from "react-icons/cg";
import logo from '../pages/icons/logo.png';
import { MdOutlineDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { AuthContext } from '../component/AuthContext';
import { useContext } from 'react';


function NavBar(input) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
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

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const setClassdash = () => {
    if (input.input === "dashboard") {
      return styles.DashBoardselected;
    }
    else {
      return styles.DashBoard;
    }
  }
  const setClassAna = () => {
    if (input.input === "analytics") {
      return styles.DashBoardselected;
    }
    else {
      return styles.DashBoard;
    }
  }
  const handleDashBoardclick = () => {
    navigate('/dashboard');
  }

  const handleAnalyticsclick = () => {
    navigate('/analytics');
  }
  const handleLogout = () => {
    logout();
    navigate('/login');
  };



  return (
    
    <nav className={styles.main}>
      <div className={styles.logo}><img src={logo} alt="*logo*" className={styles.logo1}></img><span className={styles.webname}>Habit.</span></div>
      <div className={styles.middleboxstyle}>
        <div className={styles.toggle}>
          <div className={setClassdash()} onClick={handleDashBoardclick}><MdOutlineDashboard className={styles.iconDash} />Dashboard</div>
          <div className={setClassAna()} onClick={handleAnalyticsclick}><MdAnalytics className={styles.iconAna} />Analytics </div>
        </div>
        <div className={styles.addahabit} onClick={handleOpenModal}><button onClick={handleOpenModal} className={styles.btn}><IoMdAddCircleOutline onClick={handleOpenModal} className={styles.icon} />Add Habit</button></div>
      </div>
      <div className={styles.iconDiv}>
        <div className={styles.logout}><CgProfile className={styles.logoutIcon} onClick={handleOpenProfile} /></div>
        <div className={styles.logout}><MdLogout onClick={handleLogout} className={styles.logoutIcon} /></div></div>
      <Modal show={showModal} onClose={handleCloseModal} >
        <Addahabit />
      </Modal>
      <Profile show={showprofile} onClose={handleCloseProfile}></Profile>
    </nav>
  )
}

export default NavBar;

