import { useState, useContext } from 'react';
import styles from './addahabit.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../component/AuthContext';
import axios from 'axios';

function Addahabit({ onClose }) {
    const [name, setname] = useState("");
    const [recurring, setrecurring] = useState("");
    const [type, settype] = useState('True');
    const [description, setDescription] = useState("");
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [quantitativeCheck, setquantitativeCheck] = useState(false);
    const [goal, setgoal] = useState("");
    const [Error, setError] = useState("");

    const [Monday, setMonday] = useState(false);
    const [Tuesday, setTuesday] = useState(false);
    const [Wednesday, setWednesday] = useState(false);
    const [Thursday, setThursday] = useState(false);
    const [Friday, setFriday] = useState(false);
    const [Saturday, setSaturday] = useState(false);
    const [Sunday, setSunday] = useState(false);
    const { token } = useContext(AuthContext);

    const Days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
    const dayinnumber = [];

    for (let i = 0; i < 7; i++) {
        if (Days[i]) {
            dayinnumber.push(i + 1);
        }
    }

    const navigate = useNavigate();
    const Token = token.token;

    const handleAddClick = (e) => {
        e.preventDefault();
        const addahabit = {
            name: name,
            description: description,
            start_date: startDate,
            end_date: endDate,
            good_habit: type,
            goal: goal,
            days: dayinnumber,
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `token ${Token}`,
        };
        axios.post('http://localhost:8000/api/habits/create', addahabit, { headers })
            .then(response => {
                console.log('Data posted successfully:', response.data);
                onClose();

            })
            .catch(error => {
                const errorMessage = Object.values(error.response.data)[0][0];
                console.error('Error posting data:', errorMessage);
                setError(error.response.data.error);
            });
    };

    const handleRecurringClick = (type) => {
        setrecurring(type);
        if (type === "Daily") {
            setMonday(true);
            setTuesday(true);
            setWednesday(true);
            setThursday(true);
            setFriday(true);
            setSaturday(true);
            setSunday(true);
        } else {
            setMonday(false);
            setTuesday(false);
            setWednesday(false);
            setThursday(false);
            setFriday(false);
            setSaturday(false);
            setSunday(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.tmp}><h1 className={styles.addahabit}>Add a habit</h1></div>
            <form onSubmit={handleAddClick} className={styles.form}>
                <div className={styles.name}>
                    <input type="text" placeholder="Name of Habit" value={name} onChange={(e) => setname(e.target.value)} className={styles.inputname} />
                </div>
                <div className={styles.type}>
                    <span>
                        <input type="radio" id="Positive" name="category" value='True' onChange={(e) => settype(e.target.value)} />
                        <label htmlFor="Positive">Positive</label>
                    </span>
                    <span>
                        <input type="radio" id="Negative" name="category" value='False' onChange={(e) => settype(e.target.value)} />
                        <label htmlFor="Negative">Negative</label>
                    </span>
                </div>
                <div className={styles.quantitative}>
                    <span>
                        <input type="checkbox" id="Quantitative" name="category" checked={quantitativeCheck} onChange={(e) => setquantitativeCheck(e.target.checked)} />
                        <label htmlFor="Quantitative">Set Goal</label>
                    </span>
                    {quantitativeCheck &&
                        <div className={styles.quantityBox}>
                            <span>Goal:</span>
                            <input type="text" placeholder="Ex. 5km" value={goal} onChange={(e) => setgoal(e.target.value)} className={styles.inputQuantity} />
                        </div>}
                </div>
                <div className={styles.repeatContainer}>
                    <div className={styles.repeatLabel}> Repeat : </div>
                    <div className={styles.repeatOptions}>
                        <span onClick={() => handleRecurringClick("Daily")} className={recurring === "Daily" ? styles.active : styles.daily}>Daily </span>
                        | <span onClick={() => handleRecurringClick("Weekly")} className={recurring === "Weekly" ? styles.active : styles.weekly}>Weekly </span>
                    </div>
                    <div className={styles.dayscontainer}>
                        {recurring === "Weekly" && (
                            <div className={styles.weeklyOptions}>
                                <span onClick={() => setMonday(!Monday)} className={Monday ? styles.singledayselected : styles.singleday}>M</span>
                                <span onClick={() => setTuesday(!Tuesday)} className={Tuesday ? styles.singledayselected : styles.singleday}>T</span>
                                <span onClick={() => setWednesday(!Wednesday)} className={Wednesday ? styles.singledayselected : styles.singleday}>W</span>
                                <span onClick={() => setThursday(!Thursday)} className={Thursday ? styles.singledayselected : styles.singleday}>T</span>
                                <span onClick={() => setFriday(!Friday)} className={Friday ? styles.singledayselected : styles.singleday}>F</span>
                                <span onClick={() => setSaturday(!Saturday)} className={Saturday ? styles.singledayselected : styles.singleday}>S</span>
                                <span onClick={() => setSunday(!Sunday)} className={Sunday ? styles.singledayselected : styles.singleday}>S</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.discription}>
                    <span> Discription</span>
                    <div className={styles.scroll}><textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.descriptionBox}
                    /></div>
                </div>
                <div className={styles.dates}>
                    <span> <span> Start Date : <br /></span><input type="date" value={startDate} className={styles.inputdate} onChange={(e) => setstartDate(e.target.value)} /></span>
                    <span> <span>End Date : <br /></span> <input type="date" value={endDate} className={styles.inputdate} onChange={(e) => setendDate(e.target.value)} /></span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleAddClick}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addahabit;