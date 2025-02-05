import React, { useState } from 'react'
import styles from './Habits.module.css';
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

const changeColor = (event) => {
    if (event.target.checked) {
        event.target.parentElement.parentElement.style.backgroundColor = "black";
    } else {
        event.target.parentElement.parentElement.style.backgroundColor = "white";
    }

    if (event.target.checked) {
        event.target.parentElement.parentElement.style.color = "white";
    } else {
        event.target.parentElement.parentElement.style.color = "black";
    }
}
const getclass = (value) => {
    if (value) {
        return styles.truesingleList;
    }
    else return styles.singleList;
}
const handleCheckClick = () => {
    
}

const habitList2 = habitList.map((habit) => {
    return <li>
        <div className={styles.habit2}>
            <div className={styles.checkBox} >
                <input type="checkbox" checked={habit.checked} className={styles.checkBoxInp} />
            </div>
            <div className={getclass(habit.checked)} onClick={handleCheckClick}>
                <div className={styles.text}>
                    <h3>{habit.name}</h3>
                    <h3 className={styles.categoryHabit}>{habit.discription}</h3>
                </div>
            </div>
        </div>
    </li>
});
function Habits() {
    return (
        <div className={styles.allhabitlistbox}>
            <ul>
                {habitList2}
            </ul>
        </div>
    )
}

export default Habits;
