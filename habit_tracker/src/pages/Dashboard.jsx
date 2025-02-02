import React, {useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import Habits from '../MyComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';

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
                <button className={styles.addHabitButton}>
                    Add a Habit
                </button>
            </div>
            <div className={styles.rightTopBarMain}>

                <div className={styles.sideBar}>
                    <div className={styles.sideBarCalendar}><SideCalendar /></div>
                    <div className={styles.sideBarHabit}><Habits /></div>
                </div>

                <div className={styles.rightTopBar}>
                    <div className={styles.date}>
                        <div className={styles.secDiv}>
                            <h1>{currentDate}</h1>
                            <h2>{getDay()}</h2>
                        </div>
                        
                    </div>
                    <div className={styles.streak}></div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;