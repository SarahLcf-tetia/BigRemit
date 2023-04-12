const Home = () => {

    const handleRegister = () => {
        window.location.replace("/register")
    }

    const handleLogin = () => {
        window.location.replace("/login")
    }

    return(
        <div>
            <h1>Home</h1>
            <br/>
            <input type="button" name="login" value="Login" onClick={handleLogin}/><br/><br/>
            <input type="button" name="register" value="Register" onClick={handleRegister}/><br/>
        </div>
    )
}

export default Home