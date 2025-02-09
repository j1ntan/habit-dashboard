import React from 'react';
import { useState } from 'react';
import styles from './week.module.css'
import leftarrow from '../pages/icons/reshot-icon-chevron-arrow-left-circle-XY6MSRE5DN.svg';
import rightarrow from '../pages/icons/reshot-icon-chevron-arrow-right-circle-C23LFHP5TK.svg';
import cross from '../pages/icons/cross-svgrepo-com.svg';
import dot from '../pages/icons/dot-svgrepo-com.svg';


function Week() {
    const todaydate = new Date();
    const [ptodaydate, setptodaydate] = useState(todaydate);
    const pday = ptodaydate.getDay();
    const startdate = new Date(ptodaydate);
    startdate.setDate(ptodaydate.getDate() - pday + 1);
    const enddate = new Date(ptodaydate);
    enddate.setDate(ptodaydate.getDate() - pday + 7);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const extractdates = () => {
        const enddatee = enddate.getDate();
        const startdatee = startdate.getDate();
        const endmonth = months[enddate.getMonth()];
        const startmonth = months[startdate.getMonth()];
        const year = startdate.getFullYear();
        return (endmonth === startmonth ? (<div className={styles.weekdaterange}> {startdatee < 10 && `0${startdatee}`}{startdatee >= 10 && `${startdatee}`} - {enddatee < 10 && `0${enddatee}`}{enddatee >= 10 && `${enddatee}`} {startmonth} {year}</div>) : (<div className={styles.weekdaterange}> {startdatee < 10 && `0${startdatee}`}{startdatee >= 10 && `${startdatee}`} {startmonth} - {enddatee < 10 && `0${enddatee}`}{enddatee >= 10 && `${enddatee}`} {endmonth} {year}</div>));
    }
    const handlerightarrowclick = () => {
        const newDate = new Date(ptodaydate);
        newDate.setDate(newDate.getDate() + 7);
        setptodaydate(newDate);
    };

    const handleleftarrowclick = () => {
        const newDate = new Date(ptodaydate);
        newDate.setDate(newDate.getDate() - 7);
        setptodaydate(newDate);
    };
    const ProgressBar = ({ progress }) => {
        return (
            <div className={styles.progress}>
                <div className={styles.progresscontainer}>
                    <div className={styles.progressbar} style={{ width: `${progress}%` }}></div>
                </div>
                <p className={styles.progresstext}>{progress}% achieved</p>
            </div>
        );
    };

   

    const Habitweekdisplay = () => {
        const data = [
            [{ name: "Go for a run", type: "positive", checked: false, days: [1,3,4]},
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: true },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: true },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: true },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: true },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: true },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: true }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },],
            [{ name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: false },
            { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: true }, { name: "Go for a run", type: "positive", checked: false },
            { name: "Read a book", type: "negative", checked: true },
            { name: "Eat a healthy meal", type: "positive", checked: false },
            { name: "Eat a healthy meal", type: "positive", checked: false },]
        ];

        const length = data[0].length;
        const arraynumber = [];
        for (let i = 0; i < length; i++) {
            arraynumber.push(i);
        }

        const tablerows = arraynumber.map((i) => {
            return (
                <tr key={i} className={styles.row}>
                    <td className={styles.tabledata}>{data[0][i].type == "positive" ? <img src={dot} className={styles.icons}></img> : <img src={cross} className={styles.icons}></img>}</td>
                    <td className={styles.name}>{data[0][i].name}</td>
                    {data.map((day, dayIndex) => (
                        <td key={dayIndex} className={styles.tabledata} style={day[i].checked ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
                        </td>
                    ))}
                </tr>
            );
        });

        return (
            <div className={styles.divmain}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.row}>
                            <td></td><td></td>
                            <td className={styles.tabledata}><div className={styles.day}>Mon</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Tue</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Wed</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Thu</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Fri</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Sat</div></td>
                            <td className={styles.tabledata}><div className={styles.day}>Sun</div></td>
                        </tr>
                        {tablerows}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className={styles.main}>
            <div className={styles.topbar}>
                <div className={styles.weekdate}>
                    <img src={leftarrow} alt="<-" className={styles.icon} onClick={handleleftarrowclick} />
                    <div className={styles.actualdate}>{extractdates()}</div>
                    <img src={rightarrow} alt="->" className={styles.icon} onClick={handlerightarrowclick} />
                </div>
                <ProgressBar progress='50' />
            </div>
            <hr className={styles.hr}></hr>

            <div className={styles.bottombar}>
                <Habitweekdisplay />
            </div>
        </div>
    );
}

export default Week; 