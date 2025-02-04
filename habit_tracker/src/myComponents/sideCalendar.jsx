import React, { useState } from 'react';
import styles from './sideCalendar.module.css';

function SideCalendar() {
    const todaydate = new Date();
    const [middledate, setmiddledate] = useState(todaydate);
    const [selecteddate, setselecteddate] = useState(todaydate);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function getDate(offset) {
        const newDate = new Date(middledate);
        newDate.setDate(middledate.getDate() + offset);
        const date = newDate.getDate();
        return date < 10 ? `0${date}` : `${date}`;
    }

    function getDay(offset) {
        const newDate = new Date(middledate);
        newDate.setDate(middledate.getDate() + offset);
        const day = newDate.getDay();
        return days[day];
    }

    const handlerightarrowclick = () => {
        const newDate = new Date(middledate);
        newDate.setDate(newDate.getDate() + 1);
        setmiddledate(newDate);
    };

    const handleleftarrowclick = () => {
        const newDate = new Date(middledate);
        newDate.setDate(newDate.getDate() - 1);
        setmiddledate(newDate);
    };
    const getclass = (offset) => {
        const newDate = new Date(middledate);
        newDate.setDate(middledate.getDate() + offset);
        const date = newDate.getDate();
        const month= newDate.getMonth();
        if (date === selecteddate.getDate() && (month === selecteddate.getMonth())) {
            return styles.selectedday;
        }
        else return styles.day;

    }
    const handleDateClick = (offset) => {
        const newDate = new Date(middledate);
        newDate.setDate(middledate.getDate() + offset);
        setselecteddate(newDate);
    }
    return (
        <div>
            <div>
                <span> {selecteddate.getDate()}/{selecteddate.getMonth()}/{selecteddate.getFullYear()}</span>
            </div>
            <div className={styles.sideCalendar}>
                <div className={styles.calendar}>
                    <div className={styles.calendarDiv}>
                        <div><button onClick={handleleftarrowclick}>←</button></div>
                        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                className={getclass(index - 3)}
                                onClick={() => handleDateClick(index - 3)}
                            >
                                <div className={styles.elementCal}>
                                    <h2 className={styles.dayWeek}>{getDay(index - 3)}</h2>
                                    <h3 className={styles.dateWeek}>{getDate(index - 3)}</h3>
                                </div>
                            </div>
                        ))}
                        <div><button onClick={handlerightarrowclick}>→</button></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideCalendar;