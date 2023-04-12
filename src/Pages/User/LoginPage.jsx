const LoginPage = () => {

    const handleBackFromLogin = () => {
        window.location.href = '/'
    }

    return(
        <div>
            <h1>Login</h1>
            <br/>
            <form>
                <label>email :</label><br/>
                <input type="text" name="email"/><br/>
                <label>Mot de passe :</label><br/>
                <input type="text" name="email"/>
                <br/><br/>
                <input type="submit" name="submit"/><br/>
            </form>
            <br/>
            <input type="button" name="back" value="Back" onClick={handleBackFromLogin}/><br/>
        </div>
    )
}

export default LoginPage