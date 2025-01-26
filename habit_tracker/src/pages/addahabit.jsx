import { useState } from 'react';
import styles from './addahabit.module.css';

function Addahabit() {
    const [name, setname] = useState("");
    const [color, setcolor] = useState("");
    const [recurring, setrecurring] = useState("Daily");
    const [type, settype] = useState("Positive");
    const [done, setdone] = useState(false);
    const [discription, setdiscription] = useState("");
    const [cue, setcue] = useState("");
    const [reward, setreward] = useState("");
    const [craving, setcraving] = useState("");
    const [frequency, setfrequency] = useState("");
    const [day, setday] = useState("Monday");
    const [date, setdate] = useState("1");
    const [category, setcategory] = useState("");
    const [Quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <div>
            <h2 className={styles.namelogo}>name/logo</h2>
            <h1 className={styles.addahabit}>Add a habit</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}></input>
                </div>
                <div className={styles.type}>
                    <h2>Type of Habit</h2>
                    <span><input type="radio" id="Positive" name="category" value="Positive" onChange={(e) => settype(e.target.value)}></input>
                        <label htmlFor="Positive">Positive</label></span>
                    <span><input type="radio" id="Negative" name="category" value="Negative" onChange={(e) => settype(e.target.value)}></input>
                        <label htmlFor="Negative">Negative</label>
                    </span>
                    <span><input type="radio" id="Quantitative" name="category" value="Quantitative" onChange={(e) => settype(e.target.value)}></input>
                        <label htmlFor="Quantitative">Quantitative</label><br /></span>
                    {type === "Quantitative" &&
                        <span> Enter Quantity:
                            <input type="text" placeholder="Ex. 5km" value={Quantity} onChange={(e) => setQuantity(e.target.value)}></input> 
                        </span> }      
                </div>
                <div style= {{display: 'flex', flexDirection:'column'}} >
                    <h2> Repeat</h2>
                    <div></div>
                    <div>hello</div> 
                </div>
            </form>
        </div>
                    );
};
export default Addahabit
