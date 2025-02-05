import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import Modal from '../component/modalAddaHabit.jsx'
import Addahabit from './addahabit.jsx';
import Profile from './profile.jsx';
import Habits from '../MyComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';
import { FaBeer } from "react-icons/fa";
import weekHabit from '../MyComponents/weekHabit.jsx';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import WeekHabit from '../MyComponents/weekHabit.jsx';
import CompleteWeekDate from '../MyComponents/weekDate.jsx';
import Week from '../MyComponents/week.jsx'

const userName = "User";

function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`
}

function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [currentDate, setCurrentDate] = useState(getDate());
    return (

        <div className={styles.divmain} >
            <div className={styles.topbar}>
                <Navbar />
            </div>
            <div className={styles.addaHabit}>
                <h1 className={styles.hello}>Hello, {userName}</h1>
                <button className={styles.addHabitButton} onClick={handleOpenModal}>Add a Habit</button>
            </div>
            <div className={styles.rightTopBarMain}>
                <div className={styles.sideBar}>
                    <div className={styles.sideBarCalendar}><SideCalendar /></div>
                    <div className={styles.sideBarHabit}><Habits /></div>
                </div>
                <div className={styles.rightDiv}>
                    <div>Top bar</div>
                    <div className={styles.weekbox}>
                        <Week/>
                    </div>
                </div>
                </div>
                <Modal show={showModal} onClose={handleCloseModal} >
                    <Addahabit />
                </Modal>
            </div>
            )
}

            export default Dashboard;