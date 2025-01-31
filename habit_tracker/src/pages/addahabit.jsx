import { useState } from 'react';
import styles from './addahabit.module.css';
import sport from './icons/directions_walk.svg';
import finance from './icons/bag-rupee--bag-payment-cash-money-finance.svg';
import work from './icons/bag-suitcase-1--product-business-briefcase.svg';
import health from './icons/favorite.svg';
import social from './icons/gmail_groups.svg';
import outdoor from './icons/image.svg';
import other from './icons/language.svg';
import leisure from './icons/Smile.svg';
import food from './icons/tea-cup--herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food.svg';
import background from './icons/background.svg';
import {useNavigate} from 'react-router-dom';


function Addahabit() {
    const [name, setname] = useState("");
    // const [color, setcolor] = useState("");
    const [recurring, setrecurring] = useState("Daily");
    const [type, settype] = useState("Positive");
    const [done, setdone] = useState(false);
    const [discription, setdiscription] = useState("");
    const [frequency, setfrequency] = useState("");
    const [day, setday] = useState("Monday");
    const [date, setdate] = useState("1");
    const [category, setcategory] = useState("");
    const [Quantity, setQuantity] = useState("");
    
const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    console.log(category)
    const handleCategoryClick = (e) => {
        setcategory(e.currentTarget.dataset.value);
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
            <h2 className={styles.namelogo}>name/logo</h2>
            <h1 className={styles.addahabit}>Add a habit</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.nametyperepeat}>
                    <div className={styles.name}> 
                        <input type="text" placeholder="Name of Habit" value={name} onChange={(e) => setname(e.target.value)} className={styles.inputname}></input>
                    </div>
                    <div className={styles.typerepeat}>
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
                                    <input type="text" placeholder="Ex. 5km" value={Quantity} onChange={(e) => setQuantity(e.target.value)} className={styles.inputtype}></input>
                                </span>}
                        </div>
                        <div className={styles.repeat} >
                            <h2> Repeat</h2>
                            <div className={styles.repeat2}>
                                <span onClick={(e) => {
                                    setrecurring("Daily")
                                }} className={styles.daily}>Daily </span>
                                | <span onClick={(e) => {
                                    setrecurring("Weekly")
                                }} className={styles.weekly}>Weekly </span>
                                | <span onClick={(e) => {
                                    setrecurring("Monthly")
                                }} className={styles.monthly}>Monthly </span>
                            </div>
                            <div className={styles.frequency}>
                                {
                                    recurring === "Weekly" &&
                                    <input type="number" placeholder="Enter Frequency" value={frequency} onChange={(e) => setfrequency(e.target.value)} className={styles.inputrepeat}></input>
                                }
                                {
                                    recurring === "Monthly" &&
                                    <input type="number" placeholder="Enter Frequency" value={frequency} onChange={(e) => setfrequency(e.target.value)} className={styles.inputrepeat}></input>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleAddClick}>Add</button>
                    <button className={styles.button} onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
                <div className={styles.category}><div>Select a Category</div>
                    <div >
                        <div className={category === "sport" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="sport"><img src={sport} alt="sport" className={styles.icon} /> <span className={styles.iconname}>Sports</span></div>
                        <div className={category === "finance" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="finance" ><img src={finance} alt="finance" className={styles.icon} /> <span className={styles.iconname}>Finance</span></div>
                        <div className={category === "work" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="work"><img src={work} alt="work" className={styles.icon} /> <span className={styles.iconname}>Work</span></div>
                        <div className={category === "health" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="health"><img src={health} alt="health" className={styles.icon} /> <span className={styles.iconname}>Health</span></div>
                        <div className={category === "social" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="social"><img src={social} alt="social" className={styles.icon} /> <span className={styles.iconname}>Social</span></div>
                        <div className={category === "outdoor" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="outdoor"><img src={outdoor} alt="outdoor" className={styles.icon} /> <span className={styles.iconname}>Outdoor</span></div>
                        <div className={category === "leisure" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="leisure"><img src={leisure} alt="leisure" className={styles.icon} /> <span className={styles.iconname}>Leisure</span></div>
                        <div className={category === "food" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="food"><img src={food} alt="food" className={styles.icon} /> <span className={styles.iconname}>Food</span></div>
                        <div className={category === "other" ? styles.icondivclicked : styles.icondiv} onClick={handleCategoryClick} data-value="other"><img src={other} alt="other" className={styles.icon} /> <span className={styles.iconname}>Other</span></div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Addahabit
