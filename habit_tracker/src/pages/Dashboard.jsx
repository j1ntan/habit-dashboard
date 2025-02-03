import React, {useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import Habits from '../MyComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';

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

                <div className={styles.rightTopBar}>
                    <div className={styles.date}>
                        <div className={styles.secDiv}>
                            <h1>{currentDate}</h1>
                            <h2>{getDay()}</h2>
                        </div>
                        
                    </div>
                    <div className={styles.streak}></div>
                </div>

                <div className={styles.sideBar}>
                    <div className={styles.sideBarCalendar}><SideCalendar /></div>
                    <div className={styles.sideBarHabit}><Habits /></div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;