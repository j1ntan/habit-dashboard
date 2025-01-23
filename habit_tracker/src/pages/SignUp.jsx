import styles from './Signup.module.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== ConfirmPassword){
      seterror("Passwords do not match");
      alert("Passwords do not match");
      setpassword("");
      setConfirmPassword("");
    }
    setloading(true);
  }

  const handleSignUpclick = () =>{
    navigate('/signup');
  }
  const handleLoginclick = () =>{
    navigate('/login');
  }

  return (
    <div>
      <h2 className={styles.h2}>*logo*</h2>
      <h1 className={styles.h1}>WElCOME TO HABIT TRACKER</h1>
      <h2 className={styles.h2}>Transform the way you prioritize your day</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.signUp}> 
          <span className={styles.spansignUp} onClick={handleSignUpclick}>Sign Up </span>
          <span className={styles.spanlogin} onClick={handleLoginclick}>Login</span>
        </div>
        <input className={styles.input} type="text" placeholder="Full Name" required value={FullName} onChange={(e) => setFullName(e.target.value)}></input><br />
        <input className={styles.input} type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)}></input><br />
        <input className={styles.input} type="email" placeholder="E-mail" required value={email} onChange={(e) => setemail(e.target.value)}></input><br />
        <input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
        <input className={styles.input} type="password" placeholder="Confirm Password" required value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><br />
        <button className={styles.button}>Create Account</button>
      </form>
    </div>
  );
}

export default SignUp