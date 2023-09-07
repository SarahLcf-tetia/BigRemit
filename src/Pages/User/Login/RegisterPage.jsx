import Register from '../../../Components/Form/Register'
import Menu from "../../../Components/Navigation/Menu";
import Spacer from "../../../Components/Navigation/Spacer";
import Background from "../../../Components/Pictures/background_user_1.png";
const RegisterPage = () => {

    /*
        BACK END
        - POST User
     */

    const handleBackFromRegister = () => {
        window.location.href = '/'
    }

    return(
        <div className="body_login" style={{ backgroundImage:`url(${Background})` }}>
            <Menu/>
            <Spacer/>
            <div className="section_loginAndRegister">
                <div className="part_register" id="part_register">
                    <Register/>
                </div>
            </div>
            <input type="button" name="back" value="Back" onClick={handleBackFromRegister}/><br/>
        </div>
    )
}

export default RegisterPage