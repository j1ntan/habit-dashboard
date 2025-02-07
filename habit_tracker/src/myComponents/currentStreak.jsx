import React from "react";
import styles from '../MyComponents/currentStreak.module.css';
import { FaFire } from "react-icons/fa";



function CurrentStreak(){
    return(
        <div className={styles.main}>
            <div className={styles.icon}><FaFire className={styles.iconFire}/>
            </div>
            <div className={styles.current}>
                <h2 className={styles.currentHead}>2</h2>
                <h3 className={styles.textCurrent}>CURRENT</h3>
            </div>
            <div className={styles.best}>
                <h2 className={styles.bestHead}>21</h2>
                <h3 className={styles.textBest}>BEST</h3>
            </div>
        </div>
    )
}

export default CurrentStreak;