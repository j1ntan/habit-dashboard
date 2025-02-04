import React from "react";
import styles from './weekHabit.module.css';

function WeekHabit() {
    return (
        <div className={styles.rightBottomMain}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                        {/* <GrFormPrevious className={styles.iconPre}/> */}
                        <h2 className={styles.weeklyDate}>Date</h2>
                        <GrFormNext className={styles.iconNex}/>
                </div>
                <div className={styles.headerRight}>

                </div>
            </div>
            <div className={styles.bottomMain}>
            </div>
        </div>
    )
}

export default WeekHabit