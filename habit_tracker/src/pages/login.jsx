import styles from './login.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);
    }

    const handleSignUpclick = () => {
        navigate('/signup');
    }
    const handleLoginclick = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className={styles.nav}><h2 className={styles.h2}>Habit Tracker</h2></div>
            <h1 className={styles.h1}>WElCOME TO HABIT TRACKER</h1>
            <h2 className={styles.h2}>Transform the way you prioritize your day</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.login}>
                    <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
                    <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
                </div>
                <input className={styles.input} type="text" placeholder="UserName/E-mail" required value={user} onChange={(e) => setuser(e.target.value)}></input><br />
                <input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
                <button className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login