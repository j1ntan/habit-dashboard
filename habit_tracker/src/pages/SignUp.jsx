import styles from './Signup.module.css';
import { useState } from "react";

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  
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

  return (
    <div>
      <h1 className={styles.h1}> SignUp</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.label}><label for="name">Name</label></div>
        < input className={styles.input} type="text" placeholder="Full Name" required value={FullName} onChange={(e) => setFullName(e.target.value)}></input><br />
        <div className={styles.label}><label for="username">User Name</label></div>
          <input className={styles.input} type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)}></input><br />
        <div className={styles.label}><label for="email">E-mail</label></div>
          <input className={styles.input} type="email" placeholder="E-mail" required value={email} onChange={(e) => setemail(e.target.value)}></input><br />
        <div className={styles.label}><label for="password">Password</label></div>
          <input className={styles.input} type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
        <div className={styles.label}><label for="confirm Password">Confirm Password</label></div>
          <input className={styles.input} type="password" placeholder="Confirm Password" required value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><br />
        <button className={styles.button}>Create Account</button>
        <p className={styles.p}>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default SignUp