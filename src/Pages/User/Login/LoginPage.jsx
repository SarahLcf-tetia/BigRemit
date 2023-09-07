import './Style/LoginPage.css'
import Background from '../../../Components/Pictures/background_user_1.png'
import Menu from '../../../Components/Navigation/Menu'
import Spacer from '../../../Components/Navigation/Spacer'
import Register from "../../../Components/Form/Register";

const LoginPage = () => {

    //const queryParameters = new URLSearchParams(window.location.search)
    //const state = queryParameters.get("state")


    function handleChange(event){
        document.getElementById('old').id = 'new';
        document.getElementById('active').id = 'old';
        document.getElementById('new').id = 'active';

        if(event.target.value == 0){
            document.getElementById("part_register").style.display = "none";
            document.getElementById("part_login").style.display = "block";
        }else if(event.target.value == 1){
            document.getElementById("part_register").style.display = "block";
            document.getElementById("part_login").style.display = "none";
        }

    }

    /*
        BACK END
        - GET User
     */

    return(
        <div className="body_login" style={{ backgroundImage:`url(${Background})` }}>
            <Menu/>
            <Spacer/>
            <div className="section_loginAndRegister">
                <div className="switcher" id="switcher">
                    <button className="button_switch" id="active" type="button" value="0" onClick={handleChange}>Login</button>
                    <button className="button_switch" id="old" type="button" value="1" onClick={handleChange}>Register</button>
                </div>
                <br/>
                <div className="part_login" id="part_login" style={{display: "block"}}>
                    <form>
                        <input className="field" type="text" name="email_login" placeholder="Email"/><br/>
                        <input className="field" type="text" name="Password" placeholder="Password"/>
                        <br/><br/>
                        <div>
                            <p className="text_forgotPassword">Forgot your password ?</p>
                            <input type="submit" name="submit" className="button_submit_login styled"/><br/>
                        </div>

                    </form>
                </div>
                <div className="part_register" id="part_register"  style={{display: "none"}}>
                    <form>
                        <Register/>
                    </form>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default LoginPage