import styles from './login.module.css'

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

export default Login