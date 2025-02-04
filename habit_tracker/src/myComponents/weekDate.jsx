import React, {useState} from "react";

function weekHabit(){
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate()-6);
    const newDate2 = newDate.getDate();
    if(newDate2<10 && newDate2>0){
        return `0${newDate1}`;
    }
    return `${newDate2}`;
}

function weekHabitLast(){
    let today = new Date();
    let newDate = new Date(today);
    newDate.setDate(today.getDate());
    const newDate1 = newDate.getDate();
    if(newDate1<10 && newDate1>0){
        return `0${newDate1}`;
    }
    return `${newDate1}`;
}

function getMonth() {
    const today = new Date();
    const month = today.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ,'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
}

function CompleteWeekDate(){
    return(
        <h2 className={Styles.lastDateWeek}>{weekHabitLast()}-{weekHabit()} {getMonth()}</h2>
    )
}

export default CompleteWeekDate