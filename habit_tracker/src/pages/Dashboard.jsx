import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import Modal from '../component/modalAddaHabit.jsx'
import Addahabit from './addahabit.jsx';
import Profile from './profile.jsx';
import Habits from '../MyComponents/habits.jsx';
import SideCalendar from '../MyComponents/sideCalendar.jsx';
import { FaBeer } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
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
            {/* navbar-start */}
            <div className={styles.topbar}>
                <Navbar />
            </div>
            {/* navbar - end */}


            {/* hell user and addahabit btn bar - start */}
            <div className={styles.addaHabit}>
                <h1 className={styles.username}>Hello, {userName}</h1>
                <button className={styles.addHabitButton} onClick={handleOpenModal}>Add a Habit</button>
            </div>
            {/* end of that bar */}

            <div className={styles.mainContent}>
                {/* sidebar - start */}
                <div className={styles.sideBar}>
                    <Habits/>
                </div>
                {/* sidebar - end */}

                {/* right div -start */}
                <div className={styles.rightDiv}>
                    {/* right above bar- start */}
                    <div className={styles.rightTopBar}>
                        <div className={styles.date}>
                            <div className={styles.secDiv}>
                                <h1>{currentDate}</h1>
                                <h2>{getDay()}</h2>
                            </div>
                        </div>
                        <div className={styles.streak}>
                            <div className={styles.average}></div>
                            <div className={styles.currStreak}></div>
                            <div className={styles.bestHabit}></div>
                        </div>
                    </div>
                    {/* right above bar- end */}

                    <div className={styles.rightBottomMain}>
                        {/* this code below is for analysis of week. */}
                            <Week />
                    </div>
                </div>
                {/* right div - end */}
            </div>
            <Modal show={showModal} onClose={handleCloseModal} >
                <Addahabit />
            </Modal>
        </div >
    );
}

export default Dashboard;