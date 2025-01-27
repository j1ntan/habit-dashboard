import React, {useState, useEffect} from 'react';
import styles from "./Calendar.module.css";

const Calendar = () => {
    const[currentDate, setCurrentDate] = useState(new Date());
    const[daysInMonth, setDaysInMonth] = useState([]);
    const[startDay, setStartDay] = useState(0);
    const[selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while(date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDay(new Date(year, month, 1).getDay());

    },[currentDate]);

    const dayNames = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    }

    const handleDateClick = (date) =>{
        setSelectedDate(date);
    }


  return (
    <div className={styles.calendar}>
        <div className={styles.header}>
            <button onClick={prevMonth}>&lt</button>
            <span>
                {currentDate.toLocaleString('default',{month: 'long'})}{''}
                {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth}>&gt</button>
            </div>
        <div className={styles.day-name}>
            {dayNames.map((day) => (
                <div key={day} className={styles.day-name}>
                    {day}
                </div>
            ))}
        </div>
        <div className={styles.day}>
            {Array.from({length: startDay}).map((_,index)=>(
                <div key={index} className={styles.empty-day}></div>
            ))}
            
            {daysInMonth.map((day) => (
                <div key={day} className={`${styles.day} ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? styles.today : ''} ${selectedDate && day.toDateString() === selectedDate.toDateString() ? styles.selected : ''}`} onClick={() => handleDateClick(day)}>
                    {day.getDate()}
                </div>
            ))}
        </div>

    </div>
  )
}

export default Calendar