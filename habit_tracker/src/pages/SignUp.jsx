import styles from './Signup.module.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";


function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      setError("Passwords do not match");
      setpassword("");
      setConfirmPassword("");
    }
    else{
      const signUpData={
        first_name: FullName,
        email: email,
        password: password,
        username: Username,
        retype_password: ConfirmPassword
      }
      axios.post('http://localhost:8000/api/auth/signup/', signUpData)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        navigate('/login');
      })
      .catch(error => {
        const errorMessage = Object.values(error.response.data)[0][0];
        console.error('Error posting data:', error);
        setError(error.response.data.error);
      });
    }}

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
        <div className={styles.signUp}>
          <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
          <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
        </div>
        <div className={styles.line}><CgProfile className={styles.icon}/><input className={styles.input} type="text" placeholder="Full Name" required value={FullName} onChange={(e) => setFullName(e.target.value)}></input></div><br />
        <div className={styles.line}><FaPen className={styles.icon}/><input className={styles.input} type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)}></input></div><br />
        <div className={styles.line}><MdOutlineMailOutline className={styles.icon}/><input className={styles.input} type="email" placeholder="E-mail" required value={email} onChange={(e) => setemail(e.target.value)}></input></div><br />
        <div className={styles.line}><CiLock className={styles.icon}/><input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input></div><br />
        <div className={styles.line}><IoKeyOutline className={styles.icon}/><input className={styles.input} type="password" placeholder="Confirm Password" required value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input></div><br />
        <button className={styles.button}>Create Account</button>
        {Error && <p className={styles.error}>{Error}</p>}
      </form>
    </div>
  );
}
export default SignUp