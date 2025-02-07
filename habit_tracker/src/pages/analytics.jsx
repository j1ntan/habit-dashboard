import React from "react";
import styles from './analytics.module.css'
import Navbar from '../navBar.jsx';
import HabitGraph from '../MyComponents/habitGraph.jsx'
import ProgressBar from '../MyComponents/progressBar.jsx'
import CurrentStreak from "../MyComponents/currentStreak.jsx";
import PerfectDays from "../MyComponents/perfectDays.jsx";
import ListHabits from "../MyComponents/listHabits.jsx";
import NavBar from "../MyComponents/navBar.jsx";

function Analytics(){
    return(
        <div className={styles.body}>
            <div className={styles.navbaar}>
                <NavBar />
            </div>

            {/* this is the main conntent which is below the navbar. */}
            <div className={styles.mainContent}>

                {/* this is the left part of the screen. */}
                <div className={styles.leftDiv}>

                    {/* upper left part of left div  */}
                    <div className={styles.leftUpper}>

                        {/* left part of left upper div */}
                        <div className={styles.leftPart}>

                            {/* upper part of left part of upperleft div */}
                            <div className={styles.perfectDays}><PerfectDays/></div>

                            {/*  upper part of left part of upperleft div */}
                            <div className={styles.streak}><CurrentStreak/></div>
                        </div>

                        {/* right part of left upper div */}
                        <div className={styles.rightPart}>
                            <ProgressBar />
                        </div>


                    </div>

                    {/* bottom left part of left div */}
                    <div className={styles.leftBottom}>
                        <HabitGraph/>
                    </div>
                </div>

                {/* this is the right part of screen */}
                <div className={styles.rightDiv}>
                    <ListHabits/>
                </div>
            </div>
        </div>
    )
}

export default Analytics;