import { useState } from 'react';
import styles from './addahabit.module.css';
import { useNavigate } from 'react-router-dom';


function Addahabit() {
    const [name, setname] = useState("");
    const [recurring, setrecurring] = useState("Daily");
    const [type, settype] = useState("Positive");
    const [discription, setdiscription] = useState("");
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [quantitativeCheck, setquantitativeCheck] = useState(false);
    const [Quantity, setQuantity] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleAddClick = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }
    const handleCancelClick = (e) => {
        navigate('/dashboard');
    }


    return (
        <div>
            <h1 className={styles.addahabit}>Add a habit</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.name}><input type="text" placeholder="Name of Habit" value={name} onChange={(e) => setname(e.target.value)} className={styles.inputname}></input></div>
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
            </form>
        </div>
    );
};
export default Addahabit
