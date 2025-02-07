import styles from './login.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";


function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [Error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setError('');
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/login/', { username, password })
            .then(response => {
                if (response.data.status) {
                    console.log('Login successful:', response.data);
                    navigate('/dashboard');
                }
                else {
                    setError(response.data.message)
                    setusername('');
                    setpassword('');
                };
            })
            .catch(error => {
                console.error('Error logging in:', error);
                setError('Invalid credentials');
                if (error.response) {
                    const errorMessage = Object.values(error.response.data)[0][0];
                    setError(errorMessage);
                } else {
                    setError('Invalid credentials');
                }
            });
    }

    const handleSignUpclick = () => {
        navigate('/signup');
    }
    const handleLoginclick = () => {
        navigate('/login');
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.logo}></div>
                <div className={styles.textHeader}>
                        <h1 className={styles.h1}>HABIT</h1>
                        <h2 className={styles.h2}>Transform the way you prioritize</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.login}>
                    <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
                    <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
                </div>
                <div className={styles.line}><CgProfile className={styles.icon}/><input className={styles.input} type="text" placeholder="Username" required value={username} onChange={(e) => {
                    setusername(e.target.value)
                    setError('')
                }}></input></div><br />
                <div className={styles.line}>< IoKeyOutline className={styles.icon}/><input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => {
                    setpassword(e.target.value)
                    setError('')
                }}></input></div><br />
                <button className={styles.button}>Login</button>
                {Error && <p className={styles.error}>{Error}</p>}
            </form>
        </div>
    );
}

export default Login