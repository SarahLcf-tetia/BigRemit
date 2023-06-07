import Register from '../../../Components/Form/Register'
const RegisterPage = () => {

    /*
        BACK END
        - POST User
     */

    const handleBackFromRegister = () => {
        window.location.href = '/'
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <br/>
                <Register/>
            <br/>
            <input type="button" name="back" value="Back" onClick={handleBackFromRegister}/><br/>
        </div>
    )
}

export default RegisterPage