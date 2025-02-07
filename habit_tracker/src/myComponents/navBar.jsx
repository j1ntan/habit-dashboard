import React, {useState} from "react";
import styles from '../MyComponents/navBar.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";




function NavBar(){
    const handleDashBoardclick = () => {
        navigate('/dashboard');
      }
    
    const handleAnalyticsclick = () => {
        navigate('/analytics');
      }
    
    const handleProfileclick = () => {
        navigate('/profile');
      }
    
    const navigate = useNavigate();

    return(
        <div className={styles.main}>
            <div className={styles.logo}>Habit Tracker</div>
            <div className={styles.toggle}>
                <span className={styles.spanDashBoard} onClick={handleDashBoardclick}>Dashboard</span>
                <span className={styles.spanAnalytics} onClick={handleAnalyticsclick}>Analytics </span>
                <span className={styles.spanProfile} onClick={handleProfileclick}>Profile</span>
            </div>
            <div className={styles.addahabit}><button onClick={() => navigate("../addahabit")} className={styles.btn}><IoMdAddCircleOutline onClick={() => navigate("../addahabit")}className={styles.icon}/>Add Habit</button></div>
            <div className={styles.logout}><MdLogout onClick={() => navigate("../login")} className={styles.logoutIcon}/></div>
        </div>
    )
}

export default NavBar;

