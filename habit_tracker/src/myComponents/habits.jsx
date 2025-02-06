import React, { useState } from 'react'
import styles from './Habits.module.css';
import leftarrow from '../pages/icons/reshot-icon-chevron-arrow-left-circle-XY6MSRE5DN.svg';
import rightarrow from '../pages/icons/reshot-icon-chevron-arrow-right-circle-C23LFHP5TK.svg';

function Habits() {
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
        const month = newDate.getMonth();
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
    //habit list

    const habitList = [
        { name: "Go for a run", discription: "Health", checked: false },
        { name: "Read a book", discription: "Leisure", checked: true },
        { name: "Eat a healthy meal", discription: "Health", checked: false },
        { name: "hello", discription: "sport", checked: true },
        { name: "Go for a run", discription: "Health", checked: false },
        { name: "Read a book", discription: "Leisure", checked: true },
        { name: "Eat a healthy meal", discription: "Health", checked: false },
        { name: "hello", discription: "sport", checked: true },
    ]

    const changeColor = (event) => {
        if (event.target.checked) {
            event.target.parentElement.parentElement.style.backgroundColor = "black";
        } else {
            event.target.parentElement.parentElement.style.backgroundColor = "white";
        }

        if (event.target.checked) {
            event.target.parentElement.parentElement.style.color = "white";
        } else {
            event.target.parentElement.parentElement.style.color = "black";
        }
    }
    const getclasss = (value) => {
        if (value) {
            return styles.truesingleList;
        }
        else return styles.singleList;
    }
    const handleCheckClick = () => {

    }
    const habitList2 = habitList.map((habit) => {
        return <li>
            <div className={styles.habit2}>
                <div className={styles.checkBox} >
                    <input type="checkbox" checked={habit.checked} className={styles.checkBoxInp} />
                </div>
                <div className={getclasss(habit.checked)} onClick={handleCheckClick}>
                    <div className={styles.text}>
                        <h3>{habit.name}</h3>
                        <h3 className={styles.categoryHabit}>{habit.discription}</h3>
                    </div>
                </div>
            </div>
        </li>
    });
    const ProgressBar = ({ progress }) => {
        return (
            <div className={styles.bottomprogressbar}>
                <div className={styles.progresscontainer}>
                    <div className={styles.progressbar} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.main} >
            <div className={styles.sideBarCalendar}>
                <div className={styles.sometext}> Get caught up with your task</div>
                    <div className={styles.calendarDiv}>
                        <div><img src={leftarrow} alt="<-" className={styles.icon} onClick={handleleftarrowclick} /></div>
                        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                className={getclass(index - 3)}
                                onClick={() => handleDateClick(index - 3)}
                            >
                                <h3 className={styles.dayWeek}>{getDay(index - 3)}</h3>
                                <h4 className={styles.dateWeek}>{getDate(index - 3)}</h4>
                            </div>
                        ))}
                        <div><img src={rightarrow} alt="->" className={styles.icon} onClick={handlerightarrowclick} /></div>
                    </div>
            </div>
            <div className={styles.sideBarHabit}>
                <div className={styles.habitlistbox}>
                <div className={styles.allhabitlistbox}>
                    <ul>
                        {habitList2}
                    </ul>
                 </div> 
                </div>
                <ProgressBar progress='37' />
            </div>
        </div>
    )
}

export default Habits;
