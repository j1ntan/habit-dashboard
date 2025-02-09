import React from "react";
import { useContext } from "react";
import styles from './analytics.module.css'
import HabitGraph from '../MyComponents/habitGraph.jsx'
import ProgressBar from '../MyComponents/progressBar.jsx'
import CurrentStreak from "../MyComponents/currentStreak.jsx";
import PerfectDays from "../MyComponents/perfectDays.jsx";
import ListHabits from "../MyComponents/listHabits.jsx";
import NavBar from "../MyComponents/navBar.jsx";
import { AuthContext } from '../component/AuthContext';
import axios from 'axios';

function Analytics(){

    const { token } = useContext(AuthContext);
    const Token = token.token;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `token ${Token}`,
    };

    axios.get('http://localhost:8000/api/habits/analytics', { headers })
            .then(response => {
                console.log('Data retrieved successfully:', response.data);
                navigate('/analytics');
            })
            .catch(error => {
                const errorMessage = Object.values(error.response.data)[0][0];
                console.error('Error retrieving data:', errorMessage);
                setError(error.response.data.error);
            });


    return(
        <div className={styles.body}>
            <div className={styles.navbar}>
                <NavBar input="analytics"/>
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