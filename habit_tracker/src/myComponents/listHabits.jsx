import React, {useState} from "react";
import styles from '../MyComponents/listHabits.module.css';

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

const habitList2 = habitList.map((habit) => {
    return <li>
        <div className={styles.text}>
            <div className={styles.headHabit}>
                <h3 className={styles.name}>{habit.name}</h3>
                <h2 className={styles.timePeriod}>Weekly</h2>
            </div>
            <div className={styles.text2}>
                <h3 className={styles.categoryHabit}>{habit.discription}</h3>
                <h2 className={styles.timeDate}></h2>
            </div>
        </div>
    </li>
});

function ListHabits(){
    return(
        <div className={styles.main}>
                <div className={styles.header}>list of all your Habits</div>
                <div className={styles.list}>
                    <ul className={styles.unordered}>
                        {habitList2}
                    </ul>
                </div>
        </div>
    )
}

export default ListHabits;

