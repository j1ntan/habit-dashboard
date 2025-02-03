import styles from './login.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <h2 className={styles.h2}>*logo*</h2>
            <h1 className={styles.h1}>WElCOME TO HABIT TRACKER</h1>
            <h2 className={styles.h2}>Transform the way you prioritize your day</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.login}>
                    <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
                    <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
                </div>
                <input className={styles.input} type="text" placeholder="Username" required value={username} onChange={(e) => {
                    setusername(e.target.value)
                    setError('')
                }}></input><br />
                <input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => {
                    setpassword(e.target.value)
                    setError('')
                }}></input><br />
                <button className={styles.button}>Login</button>
                {Error && <p className={styles.error}>{Error}</p>}
            </form>
        </div>
    );
}

export default Login