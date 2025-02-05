import React from 'react';
// import styles from './habitweekdisplay.css';

const Habitweekdisplay = () => {
    const data = [
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
        [{ name: "Go for a run", type: "positive", checked: false },
        { name: "Read a book", type: "negative", checked: true },
        { name: "Eat a healthy meal", type: "positive", checked: false }],
    ];

    const length = data[0].length;
    const arraynumber = [];
    for (let i = 0; i < length; i++) {
        arraynumber.push(i);
    }

    const tablerows = arraynumber.map((i) => {
        return (
            <tr key={i}>
                <td>{data[0][i].type=="positive" ? "positive" : "negative"}</td>
                <td>{data[0][i].name}</td>
                {data.map((day, dayIndex) => (
                    <td key={dayIndex} style={day[i].checked ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
                        .
                    </td>
                ))}
            </tr>
        );
    });

    return (
        <div>
            <table>
                <tbody>
                    {tablerows}
                </tbody>
            </table>
        </div>
    );
};

export default Habitweekdisplay;