import './login.css'

function Login(){
    return(
        <div class="login">    
            <div class="login2">
                <div class="login3">
                    <h2>Login</h2>
                </div>
                <div class="noAccount">
                    <p>Don't have an Account ?</p>
                    <button><a href="#">Click here</a></button>
                </div>
                <h3>E-mail</h3>
                <input></input>
                <h3>Password</h3>
                <input></input>  
                <button class="submit">Login</button>
            </div>         
        </div>
    );
}

export default Login