import React from 'react';
import styles from './habitweekdisplay.module.css';
import cross from '../pages/icons/cross-svgrepo-com.svg';
import dot from '../pages/icons/dot-svgrepo-com.svg';

const Habitweekdisplay = () => {
    const data = [
        [{ name: "Go for a run", type: "positive", checked: false },
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
                        <td className={styles.tabledata}>Mon</td>
                        <td className={styles.tabledata}>Tue</td>
                        <td className={styles.tabledata}>Wed</td>
                        <td className={styles.tabledata}>Thru</td>
                        <td className={styles.tabledata}>Fri</td>
                        <td className={styles.tabledata}>Sat</td>
                        <td className={styles.tabledata}>Sun</td>
                    </tr>
                    {tablerows}
                </tbody>
            </table>
        </div>
    );
};

export default Habitweekdisplay;