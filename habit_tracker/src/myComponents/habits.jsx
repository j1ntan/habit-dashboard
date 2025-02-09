import React, { useState, useContext, useEffect } from 'react';
import styles from './Habits.module.css';
import leftarrow from '../pages/icons/reshot-icon-chevron-arrow-left-circle-XY6MSRE5DN.svg';
import rightarrow from '../pages/icons/reshot-icon-chevron-arrow-right-circle-C23LFHP5TK.svg';
import { AuthContext } from '../component/AuthContext';
import axios from 'axios';
import tick from '../pages/icons/check.svg';

function Habits() {
    const todaydate = new Date();
    const [middledate, setmiddledate] = useState(todaydate);
    const [selecteddate, setselecteddate] = useState(todaydate);
    const [menuVisible, setMenuVisible] = useState(null);
    const [completed, setcompleted] = useState('');
    const [habitList, sethabitList] = useState([]);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { token } = useContext(AuthContext);

    const startonlydate = selecteddate.getDate() > 9 ? selecteddate.getDate() : `0${selecteddate.getDate()}`;
    const startonlymonth = selecteddate.getMonth() + 1 > 9 ? selecteddate.getMonth() + 1 : `0${selecteddate.getMonth() + 1}`;
    const endonlydate = selecteddate.getDate() > 9 ? selecteddate.getDate() : `0${selecteddate.getDate()}`;
    const endonlymonth = selecteddate.getMonth() + 1 > 9 ? selecteddate.getMonth() + 1 : `0${selecteddate.getMonth() + 1}`;
    const startDate = `${selecteddate.getFullYear()}-${startonlymonth}-${startonlydate}`;
    const endDate = `${selecteddate.getFullYear()}-${endonlymonth}-${endonlydate}`;

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
    };

    const handleDateClick = (offset) => {
        const newDate = new Date(middledate);
        newDate.setDate(middledate.getDate() + offset);
        setselecteddate(newDate);
    };

    const getclasss = (value) => {
        if (value) {
            return styles.truesingleList;
        }
        else return styles.singleList;
    };
    const getclasscheck = (value) => {
        if(value) {
            return styles.checkboxselected;
        }
        else return styles.checkbox;
    }

    const Token = token.token;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `token ${Token}`,
    };

    const body = {
        start_date: startDate,
        end_date: startDate,
    };

    useEffect(() => {
        axios.post('http://localhost:8000/api/habits/calendar', body, { headers })
            .then(response => {
                console.log('Data fetched successfully:', response.data.data[0].habits);
                sethabitList(response.data.data[0].habits);
            })
            .catch(error => {
                const errorMessage = Object.values(error.response.data);
                console.error('Error fetching data:', errorMessage);
            });
    }, [selecteddate, startDate, Token,]);

    const handleCheckClick = (index) => {
        const newCompletedStatus = !habitList[index].completed;
        const used= newCompletedStatus ? "True"  : "False";
        console.log(used);
        const bodycheck = {
            date: startDate,
            completed: used,
        };
        const url = `http://localhost:8000/api/habits/${habitList[index].habit_id}/track`;
        axios.post(url, bodycheck, { headers })
            .then(response => {
                console.log('Data posted successfully:', response.data);
                sethabitList(prevHabitList => {
                    const newHabitList = [...prevHabitList];
                    newHabitList[index].completed = newCompletedStatus;
                    return newHabitList;
                });
            })
            .catch(error => {
                const errorMessage = Object.values(error.response.data);
                console.error('Error posting data:', errorMessage);
            });
    };

    const handleMenuClick = (index) => {
        setMenuVisible(menuVisible === index ? null : index);
    };

    const handleDelete = (index) => {
        axios.delete(`http://localhost:8000/api/habits/${habitList[index].habit_id}/delete`, {headers})
        .then(response => {
            console.log('Data deleted successfully');
            sethabitList(prevHabitList => prevHabitList.filter((_, i) => i !== index));
        })
        .catch(error => {
            const errorMessage = Object.values(error.response.data);
            console.error('Error posting data:', errorMessage);
        });
        setMenuVisible(null);
    };

    const habitList2 = habitList.map((habit, index) => (
        <li key={index}>
            <div className={styles.habit2}>
                <div className={getclasss(habit.completed)}>
                    <div className={styles.habitout} onClick={() => handleCheckClick(index)}>
                        <div className={getclasscheck(habit.completed)}><img src={tick} alt="." ></img></div>
                        <div className={styles.text}>
                            <h3>{habit.habit_name}</h3>
                            <h3 className={styles.categoryHabit}>{habit.goal}</h3>
                        </div>
                    </div>
                    <div className={styles.menuIcon} onClick={() => handleMenuClick(index)}>⋮</div>
                    {menuVisible === index && (
                        <div className={styles.menu}>
                            <div className={styles.menuItem} onClick={() => handleDelete(index)}>Delete</div>
                        </div>
                    )}
                </div>
            </div>
        </li>
    ));

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
        <div className={styles.main}>
            <div className={styles.sideBarCalendar}>
                <div className={styles.calendarDiv}>
                    <div><img src={leftarrow} alt="<-" className={styles.icon} onClick={handleleftarrowclick} /></div>
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                        <div
                            key={index}
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
    );
}

export default Habits;