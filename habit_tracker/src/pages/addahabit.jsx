import { useState } from 'react';
import styles from './addahabit.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../component/AuthContext';
import { useContext } from 'react';
import axios from 'axios';

function Addahabit() {
    const [name, setname] = useState("");
    const [recurring, setrecurring] = useState("Daily");
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
    const dayinnumber = []

    for (let i = 1; i <= 7; i++) {
        if (Days[i]) {
            dayinnumber.push(i);
        }
    }

    const navigate = useNavigate();
    const Token=token.token;

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
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `token ${Token}`,
        };
        axios.post('http://localhost:8000/api/habits/create', addahabit, { headers })
            .then(response => {
                console.log('Data posted successfully:', response.data);
            })
            .catch(error => {
                const errorMessage = Object.values(error.response.data)[0][0];
                console.error('Error posting data:', error);
                setError(error.response.data.error);
            });
    }
    const handleCancelClick = (e) => {
        navigate('/dashboard');
    }
    console.log(Token)
    return (
<<<<<<< HEAD
        <div className={styles.main}>
            <div className={styles.header}> <h1 className={styles.addahabit}>Add new habit</h1></div>
            <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.name}><input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} className={styles.inputname}></input></div>
            <div className={styles.type}><span><input type="radio" id="Positive" name="category" value="Positive" onChange={(e) => settype(e.target.value)}></input>
                <label htmlFor="Positive">Positive</label></span>
                <span><input type="radio" id="Negative" name="category" value="Negative" onChange={(e) => settype(e.target.value)}></input>
                    <label htmlFor="Negative">Negative</label>
                </span>
            </div>
            <div className={styles.quantitative}><span><input type="checkbox" id="Quantitative" name="category" checked={quantitativeCheck} onChange={(e) => setquantitativeCheck(e.target.checked)}></input>
                <label htmlFor="Quantitative">Quantitative</label></span>
                {quantitativeCheck &&
                    <div className={styles.quantityBox}> <span>Quantity:</span> 
                        <input type="text" placeholder="Ex. 5km" value={Quantity} onChange={(e) => setQuantity(e.target.value)} className={styles.inputQuantity}></input>
                    </div>}
            </div>
            <div className={styles.repeatContainer}>
            <div className={styles.repeatLabel}> Repeat : </div>
            <div className={styles.repeatOptions}>
                
                <span onClick={(e) => {
                    setrecurring("Daily")
                }} className={recurring==="Daily" ? styles.active : styles.daily}>Daily </span>
                | <span onClick={(e) => {
                    setrecurring("Weekly")
                }} className={recurring==="Weekly" ? styles.active : styles.weekly}>Weekly </span>
                | <span onClick={(e) => {
                    setrecurring("Monthly")
                }} className={recurring==="Monthly" ? styles.active : styles.monthly}>Monthly </span>
            </div>
            </div>
            <div className={styles.discription}><span> Discription</span>
                <textarea
                    value={discription}
                    onChange={(e) => setdiscription(e.target.value)}
                    className={styles.descriptionBox}
                />
            </div>
            <div className={styles.dates}>
                <span> <span> Start Date : <br/></span><input type="date" value={startDate} className={styles.inputdate} onChange={(e) => setstartDate(e.target.value)} /></span>
                <span> <span>End Date : <br/></span> <input type="date" value={endDate} className={styles.inputdate} onChange={(e) => setendDate(e.target.value)} /></span>
            </div>

            <div className={styles.buttons}>
                <button className={styles.button} onClick={handleAddClick}>Add</button>
            </div>
=======
        <div>
            <h1 className={styles.addahabit}>Add a habit</h1>
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
                        <label htmlFor="Quantitative">Goal</label>
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
                        <span onClick={() => setrecurring("Daily")} className={recurring === "Daily" ? styles.active : styles.daily}>Daily </span>
                        | <span onClick={() => setrecurring("Weekly")} className={recurring === "Weekly" ? styles.active : styles.weekly}>Weekly </span>
                        {recurring === "Weekly" && (
                            <div className={styles.weeklyOptions}>
                                <span onClick={() => setMonday(!Monday)} className={Monday ? styles.activeDay : ''}>M</span>
                                <span onClick={() => setTuesday(!Tuesday)} className={Tuesday ? styles.activeDay : ''}>T</span>
                                <span onClick={() => setWednesday(!Wednesday)} className={Wednesday ? styles.activeDay : ''}>W</span>
                                <span onClick={() => setThursday(!Thursday)} className={Thursday ? styles.activeDay : ''}>T</span>
                                <span onClick={() => setFriday(!Friday)} className={Friday ? styles.activeDay : ''}>F</span>
                                <span onClick={() => setSaturday(!Saturday)} className={Saturday ? styles.activeDay : ''}>S</span>
                                <span onClick={() => setSunday(!Sunday)} className={Sunday ? styles.activeDay : ''}>S</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.discription}>
                    <span> Discription</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.descriptionBox}
                    />
                </div>
                <div className={styles.dates}>
                    <span> <span> Start Date : <br /></span><input type="date" value={startDate} className={styles.inputdate} onChange={(e) => setstartDate(e.target.value)} /></span>
                    <span> <span>End Date : <br /></span> <input type="date" value={endDate} className={styles.inputdate} onChange={(e) => setendDate(e.target.value)} /></span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleAddClick}>Add</button>
                </div>
>>>>>>> 248a1aa33982ec8761bd7975d3426bffb18249db
            </form>
        </div>
    );
};

export default Addahabit;