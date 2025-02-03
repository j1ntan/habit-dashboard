import React, { useState } from 'react'
import styles from './Habits.module.css';
import sport from '../pages/icons/directions_walk.svg';
import finance from '../pages/icons/bag-rupee--bag-payment-cash-money-finance.svg';
import work from '../pages/icons/bag-suitcase-1--product-business-briefcase.svg';
import health from '../pages/icons/favorite.svg';
import social from '../pages/icons/gmail_groups.svg';
import outdoor from '../pages/icons/image.svg';
import other from '../pages/icons/language.svg';
import leisure from '../pages/icons/Smile.svg';
import food from '../pages/icons/tea-cup--herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food.svg';

const habitList = [
    {name: "Go for a run", icon: sport, category: "Health"},
    {name: "Read a book", icon: leisure, category: "Leisure"},
    {name: "Eat a healthy meal", icon: food, category: "Health"},
]

const changeColor = (event) => {
    if(event.target.checked){
        event.target.parentElement.parentElement.style.backgroundColor = "black";
    } else {
        event.target.parentElement.parentElement.style.backgroundColor = "white";
    }

    if(event.target.checked){
        event.target.parentElement.parentElement.style.color = "white";
    } else {
        event.target.parentElement.parentElement.style.color = "black";
    }
}

const habitList2 = habitList.map((habit) => {
    return <li>
    <div className={styles.habit2}>
            <div className={styles.singleList}>
                <div className={styles.checkBox}>
                        <input type="checkbox" className={styles.checkBoxInp} onClick={changeColor} />
                </div>
                <div className={styles.iconDiv}>
                    <img src={habit.icon} className={styles.icon} />
                </div>
                
                <div className={styles.text}>
                    <h3>{habit.name}</h3>
                    <h3 className={styles.categoryHabit}>{habit.category}</h3>
                </div>
            </div>
    </div>
</li>
});

function Habits (){
    return (
        <>
        <ul>
            {habitList2}
        </ul>
        </>
    )
}

export default Habits;