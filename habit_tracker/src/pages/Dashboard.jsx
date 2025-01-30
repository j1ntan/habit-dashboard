import Calendar from '../MyComponents/Calendar';
import Navbar from '../navBar.jsx';
import Styles from './Dashboard.module.css';
import React from 'react';

function Dashboard() {
    return (
        <>
            <div className={Styles.navBar}>
                <Navbar />
            </div>
            <div className={Styles.calendar}>
                <Calendar />
            </div>
        </>
    )
}

export default Dashboard