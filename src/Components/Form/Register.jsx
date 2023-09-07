import {useState} from "react";

const Register = () => {

    function handleChange(newSection, oldSection){
        document.getElementsByClassName(oldSection)[0].style.display = "none";
        document.getElementsByClassName(newSection)[0].style.display = "block";
    }
    function handleChangeBack(newSection, oldSection){
        document.getElementsByClassName(oldSection)[0].style.display = "none";
        document.getElementsByClassName(newSection)[0].style.display = "block";
    }

    function handleRedirection(event){
        window.location.href = '/user'
    }

    return(
        <div>
            <form>
                <div className="section_a">
                    <form>
                        <p className="text_register">Please enter your email address : </p>
                        <input className="field" type="text" name="email_register" placeholder="Email"/><br/>
                        <span className="text_TermsAndPrivacy">By registering, you accept our Terms of use and Privacy Policy</span><br/>
                        <p className="text_register">Already have an account ? Log in at !</p>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_b1", "section_a")}/><br/>
                    </form>
                </div>
                <div>
                    <div className="section_b1" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <label className="text_register">What kind of account would you like to open today ? :</label><br/><br/>
                        <input type="radio" id="personal" name="drone" value="personal"
                               onClick={()=> handleChange("section_b2", "section_b1")}/>
                        <label>Personal account: send, spend, and receive the world of less</label><br/>
                        <input type="radio" id="business" name="drone" value="business"
                               onClick={()=> handleChange("section_c1", "section_b1")}/>
                        <label>Business account: do business or freelance work internationally</label><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_a", "section_b1")}/>
                    </div>
                    <div className="section_b2" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <label className="text_register">Your country of primary residence :</label><br/>
                        <input className="field" type="text" name="country"/><br/><br/>
                        <label className="text_register">Verify your phone number with a code :</label><br/>
                        <input className="field" type="number" name="phone"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b1", "section_b2")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_b3", "section_b2")}/>
                    </div>
                    <div className="section_b3" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <label className="text_register">Enter the xx-digit-code</label><br/>
                        <input className="field" type="number" name="code"/><br/><br/>
                        <input type="button" name="submit" value="I didn't receive the code"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b2", "section_b3")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_b4", "section_b3")}/>
                    </div>
                    <div className="section_b4" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <label className="text_register">Password :</label><br/>
                        <input className="field" type="password" name="password"/><br/><br/>
                        <label className="text_register">Confirm password :</label><br/>
                        <input className="field" type="password" name="confirmPassword"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b3", "section_b4")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_b5", "section_b4")}/>
                    </div>
                    <div className="section_b5" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <h4>Personal information</h4>
                        <label className="text_register">Full legal first and middle names :</label><br/>
                        <input className="field" type="text" name="name"/><br/><br/>
                        <label className="text_register">Full legal last name(s) :</label><br/>
                        <input className="field" type="text" name="lastname"/><br/><br/>
                        <label className="text_register">Date of birth :</label><br/>
                        <input className="field" type="date" name="date"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b4", "section_b5")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_b6", "section_b5")}/>
                    </div>
                    <div className="section_b6" style={{display: "none"}}>
                        <h3 className="title_h3">Create your personal account Big Remit</h3>
                        <h4>Personal address</h4>
                        <label className="text_register">Country :</label><br/>
                        <input className="field" type="text" name="country"/><br/><br/>
                        <label className="text_register">Address :</label><br/>
                        <input className="field" type="text" name="address"/><br/><br/>
                        <label className="text_register">City :</label><br/>
                        <input className="field" type="text" name="city"/><br/><br/>
                        <label className="text_register">Postal code :</label><br/>
                        <input className="field" type="number" name="postalCode"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b5", "section_b6")}/>
                        <input type="button" name="Next" value="Send" className="button_submit_login styled" onClick={handleRedirection}/>

                    </div>
                </div>
                <div>
                    <div className="section_c1" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <label className="text_register">Country :</label><br/>
                        <input className="field" type="text" name="country"/><br/><br/>
                        <label className="text_register">Address :</label><br/>
                        <input className="field" type="text" name="address"/><br/><br/>
                        <label className="text_register">City :</label><br/>
                        <input className="field" type="text" name="city"/><br/><br/>
                        <label className="text_register">Postal code :</label><br/>
                        <input className="field" type="number" name="postalCode"/><br/><br/>
                        <label className="text_register">Registered business name :</label><br/>
                        <input className="field" type="text" name="businessName"/><br/><br/>
                        <label className="text_register">Business type :</label><br/>
                        <input className="field" type="text" name="businessType"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_b1", "section_c1")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_c2", "section_c1")}/>
                    </div>
                    <div className="section_c2" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <label className="text_register">Business phone number :</label><br/>
                        <input className="field" type="number" name="businessPhone"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_c1", "section_c2")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_c3", "section_c2")}/>
                    </div>
                    <div className="section_c3" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <label className="text_register">Enter the xx-digit-code :</label><br/>
                        <input className="field" type="number" name="code"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_c2", "section_c3")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_c4", "section_c3")}/>
                    </div>
                    <div className="section_c4" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <label className="text_register">Helps us your account faster without this information we can't verify your account :</label><br/>
                        <input className="field" type="text" name="categorie" placeholder="Categorie"/><br/><br/>
                        <input className="field" type="text" name="subcategorie" placeholder="Subcategorie"/><br/><br/>
                        <label className="text_register">Email business :</label><br/>
                        <input className="field" type="text" name="emailBusiness"/><br/><br/>
                        <label className="text_register">Do you have a website, social media, Amazon of Ebay profile ?</label><br/><br/>
                        <input type="radio" name="yes"/><label>Yes</label><br/>
                        <input type="radio" name="no"/><label>No</label><br/><br/>
                        <label className="text_register">Size of your business :</label><br/>
                        <input className="field" type="number" name="sizeBusiness"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_c3", "section_c4")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_c5", "section_c4")}/>
                    </div>
                    <div className="section_c5" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <h4>Personal information</h4>
                        <label className="text_register">Full legal first and middle names :</label><br/>
                        <input className="field" type="text" name="name"/><br/><br/>
                        <label className="text_register">Full legal last name(s) :</label><br/>
                        <input className="field" type="text" name="lastname"/><br/><br/>
                        <label className="text_register">Date of birth :</label><br/>
                        <input className="field" type="date" name="date"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_c4", "section_c5")}/>
                        <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                            handleChange("section_c6", "section_c5")}/>
                    </div>
                    <div className="section_c6" style={{display: "none"}}>
                        <h3 className="title_h3"> Create business account setup </h3>
                        <h4>Personal address</h4>
                        <label className="text_register">Country :</label><br/>
                        <input className="field" type="text" name="country"/><br/><br/>
                        <label className="text_register">Address :</label><br/>
                        <input className="field" type="text" name="address"/><br/><br/>
                        <label className="text_register">City :</label><br/>
                        <input className="field" type="text" name="city"/><br/><br/>
                        <label className="text_register">Postal code :</label><br/>
                        <input className="field" type="number" name="postalCode"/><br/><br/>
                        <input type="button" name="Back" value="Back" className="button_submit_login styled" onClick={() =>
                            handleChangeBack("section_c5", "section_c6")}/>
                        <input type="button" name="Next" value="Send" className="button_submit_login styled" onClick={handleRedirection}/>
                    </div>

                </div>
                <br/><br/>
            </form>
        </div>
    )
}

export default Register