{/*import styles from './login.module.css'

function Login(){
    return(
        <div className={styles.firstDiv}>
            <div className={styles.div1}>
                <h1>Login</h1>

                <form action="submit" method="post">
                    <div className={styles.label}><label for="name">Name</label></div>
                        <input className={styles.input1} type="text" name="name" placeholder="Your Name"></input>
                    <div className={styles.label}><label for="email">E-mail</label></div>
                        <input className={styles.input1} type="email" name="email" placeholder="E-mail"></input>
                    <div className={styles.label}><label for="password">Password</label></div>
                        <input className={styles.input1} type="password" name="password" placeholder="Your Password"></input>
                    <input className={styles.input2} type="submit" value="submit" />
                    <div className={styles.noAcc}>
                        <p className={styles.para}>Don't have an Account ? </p> 
                        <a href="/signup">Sign Up</a>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Login */}

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
            <h2 className={styles.h2}>*logo*</h2>
            <h1 className={styles.h1}>WElCOME TO HABIT TRACKER</h1>
            <h2 className={styles.h2}>Transform the way you prioritize your day</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.login}>
                    <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
                    <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
                </div>
                <input className={styles.input} type="text" placeholder="UserName/Password" required value={user} onChange={(e) => setuser(e.target.value)}></input><br />
                <input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
                <button className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login