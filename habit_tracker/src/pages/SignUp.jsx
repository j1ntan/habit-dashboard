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
    console.log("submitting");
  }

  return (
    <div>
      <h1> SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required value={FullName} onChange={(e) => setFullName(e.target.value)}></input><br />
        <input type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)}></input><br />
        <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setemail(e.target.value)}></input><br />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
        <input type="password" placeholder="Confirm Password" required value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><br />
        <button >Create Account</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default SignUp