import React, { useState } from 'react';
import styles from './sideCalendar.module.css';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}`;
  }

function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
}

function SideCalendar() {  
const [currentDate, setCurrentDate] = useState(getDate());      
    return (
        <div className={styles.sideCalendar}>
            <div className={styles.calendar}>
                <div className={styles.calendarDiv}>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()-3}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()-2}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()-1}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()}</h3></div></div>
                </div>
            </div>
        </div>
    )
}

export default SideCalendar;