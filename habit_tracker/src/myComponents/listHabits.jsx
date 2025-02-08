import React, {useState} from "react";
import styles from '../MyComponents/listHabits.module.css';

const habitList = [
    { name: "Go for a run", discription: "Health", checked: false, time: "weekly" },
    { name: "Read a book", discription: "Leisure", checked: true, time: "daily" },
    { name: "Eat a healthy meal", discription: "Health", checked: false, time: "weekly"},
    { name: "hello", discription: "sport", checked: true, time: "weekly" },
    { name: "Go for a run", discription: "Health", checked: false, time: "weekly"},
    { name: "Read a book", discription: "Leisure", checked: true, time: "daily"  },
    { name: "Eat a healthy meal", discription: "Health", checked: false, time: "daily" },
    { name: "hello", discription: "sport", checked: true, time: "weekly" },
]



const habitList2 = habitList.map((habit) => {
    return <li>
        <div className={styles.text}>
            <div className={styles.headHabit}>
                <h3 className={styles.name}>{habit.name}</h3>
                <h2 className={styles.timePeriod}>
                    {habit.time === "weekly" ? "weekly" : "daily"}
                </h2>
            </div>
            <div className={styles.text2}>
                <h3 className={styles.categoryHabit}>{habit.discription}</h3>
                <div>
                { habit.time === "weekly" ? <div className={styles.timeDate}>
                    <p className={styles.m} id={styles.days}>M</p>
                    <p className={styles.t} id={styles.days}>T</p>
                    <p className={styles.w} id={styles.days}>W</p>
                    <p className={styles.th} id={styles.days}>T</p>
                    <p className={styles.f} id={styles.days}>F</p>
                    <p className={styles.sa} id={styles.days}>S</p>
                    <p className={styles.su} id={styles.days}>S</p>
                    </div> :"" 
                    }    
                    
                </div>
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

