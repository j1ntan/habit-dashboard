import React, {useState} from "react";
import styles from '../MyComponents/perfectDays.module.css';


function getMonth() {
    const today = new Date();
    const month = today.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ,'Sep', 'Oct', 'Nov', 'Dec'];
    const answer = months[month];
    return `${answer}`;
}

function getYear() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
}

function getWeek() {
    const today = new Date();
    let currentDate = new Date();
    const dateNew = today.getDate();
    let yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 6) ;
    const dateLate = yesterday.getDate();

    return `${dateLate}-${dateNew}`;
}


function PerfectDays(){
    const [currentYear, setCurrentYear] = useState(getYear());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [currentWeek, setCurrentWeek] = useState(getWeek());

    return(
        <div className={styles.main}>
            <div className={styles.mainHeader}><div className={styles.header}><h3>number of perfect days</h3></div></div>
            
            
            <div className={styles.bottom}>
                <div className={styles.week}>
                    <h2 className={styles.week}>3</h2>
                    <div className={styles.weekDates}>
                        {currentWeek}
                    </div>
                </div>
                <div className={styles.month}>
                    <h2 className={styles.month}>11</h2>
                    <div className={styles.curMonth}>
                        {currentMonth}
                    </div>
                </div>
                <div className={styles.year}>
                    <h2 className={styles.year}>51</h2>
                    <div className={styles.curYear}>{currentYear}</div>
                </div>
            </div>
            
        </div>
    )
}

export default PerfectDays;