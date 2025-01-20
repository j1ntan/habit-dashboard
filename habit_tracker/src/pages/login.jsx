import './login.css'

function Login(){
    return(
        <div class="firstDiv">
            <div class="login">
                <h1>Login</h1>
                <form action="submit" method="post">
                    <div class="label"><label for="name">Name</label></div>
                        <input type="text" name="name" placeholder="Your Name"></input>
                    <div class="label"><label for="email">E-mail</label></div>
                        <input type="email" name="email" placeholder="E-mail"></input>
                    <div class="label"><label for="password">Password</label></div>
                        <input type="password" name="password" placeholder="Your Password"></input>
                    <div class="noAcc">
                        <p class="para">Don't have an Account ? </p> 
                        <a href="#">Sign Up</a>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
}

export default Login