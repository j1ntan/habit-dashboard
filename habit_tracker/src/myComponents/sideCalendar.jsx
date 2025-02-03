import { useEffect } from 'react';
import React, { useState } from 'react';
import styles from './sideCalendar.module.css';

function getDatey3() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()-3);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

function getDatey2() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()-2);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

  function getDatey1() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()-1);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

function getDate() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate());
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

function getDatet1() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()+1);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

function getDatet2() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()+2);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

function getDatet3() {
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()+3);
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
  }

/*This was for the dates in sidebar <calendar></calendar>*/

/*now i am starting same for week days*/

function getDayn3() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day-3+7];
}

function getDayn2() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day-2+7];
}

function getDayn1() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day-1];
}

function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
}

function getDayp1() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day+1];
}

function getDayp2() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day+2];
}

function getDayp3() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day+3];
}

/*This all upper was for week days. i did not found any other way to do this.*/

function SideCalendar() {  
const [currentDate, setCurrentDate] = useState(getDate());      
    return (
        <div className={styles.sideCalendar}>
            <div className={styles.calendar}>
                <div className={styles.calendarDiv}>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayn3()}</h2><h3 className={styles.dateWeek}>{getDatey3()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayn2()}</h2><h3 className={styles.dateWeek}>{getDatey2()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayn1()}</h2><h3 className={styles.dateWeek}>{getDatey1()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDay()}</h2><h3 className={styles.dateWeek}>{getDate()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayp1()}</h2><h3 className={styles.dateWeek}>{getDatet1()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayp2()}</h2><h3 className={styles.dateWeek}>{getDatet2()}</h3></div></div>
                    <div className={styles.day}><div className={styles.elementCal}><h2 className={styles.dayWeek}>{getDayp3()}</h2><h3 className={styles.dateWeek}>{getDatet3()}</h3></div></div>
                </div>
            </div>
        </div>
    )
}

export default SideCalendar;