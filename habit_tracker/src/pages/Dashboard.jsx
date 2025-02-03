import React, {useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import Profile from './profile.jsx';
import Habits from '../MyComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';
import { FaBeer } from "react-icons/fa";
import weekHabit from '../MyComponents/weekHabit.jsx';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


const userName = "User";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }


function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}


function Dashboard() {
    const [currentDate, setCurrentDate] = useState(getDate());
    return (
        <div className={styles.divmain} >

            <div className={styles.topbar}>
                <Navbar />
            </div>

            <div className={styles.addaHabit}>                
                <h1 className={styles.hello}>Hello, {userName}</h1>
                <button className={styles.addHabitButton} ><a href='http://localhost:5173/addahabit'>Add a Habit</a></button>    
            </div>
            <div className={styles.rightTopBarMain}>
            <div className={styles.sideBar}>
                    <div className={styles.sideBarCalendar}><SideCalendar /></div>
                    <div className={styles.sideBarHabit}><Habits /></div>
            </div>
            <div className={styles.rightDiv}>
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

                <div className={styles.rightBottomMain}>
                    <div className={styles.header}>
                        <div className={styles.headerLeft}>
                            <GrFormPrevious className={styles.iconPre}/>
                            <h2>Date</h2>
                            <GrFormNext className={styles.iconNex}/>
                        </div>
                        <div className={styles.headerRight}></div>
                    </div>
                    <div className={styles.bottomMain}>

                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Dashboard;