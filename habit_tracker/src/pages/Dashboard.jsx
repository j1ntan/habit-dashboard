import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../MyComponents/navBar.jsx';
import Profile from './profile.jsx';
import Habits from '../myComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';
import { FaBeer } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Week from '../MyComponents/week.jsx'


const userName = "User";

function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`
}

function Dashboard() {
    

    const [currentDate, setCurrentDate] = useState(getDate());
    return (

        <div className={styles.divmain} >
            {/* navbar-start */}
            <div className={styles.topbar}>
                <Navbar input="dashboard"/>
            </div>
            {/* navbar - end */}
            <div className={styles.mainContent}>
                {/* sidebar - start */}
                <div className={styles.sideBar}>
                    <Habits/>
                </div>
                {/* sidebar - end */}

                {/* right div -start */}
                <div className={styles.rightDiv}>
                    {/* right above bar- start */}
                    <div className={styles.rightTopBar}>
                        <div className={styles.date}>
                            <div className={styles.secDiv}>
                                <h1>{currentDate}</h1>
                                <h2>{getDay()}</h2>
                            </div>
                        </div>
                        <div className={styles.streak}>
                            <div className={styles.average}></div>
                            <div className={styles.currStreak}></div>
                            <div className={styles.bestHabit}></div>
                        </div>
                    </div>
                    {/* right above bar- end */}

                    <div className={styles.rightBottomMain}>
                        {/* this code below is for analysis of week. */}
                            <Week />
                    </div>
                </div>
                {/* right div - end */}
            </div>
            
        </div >
    );
}

export default Dashboard;