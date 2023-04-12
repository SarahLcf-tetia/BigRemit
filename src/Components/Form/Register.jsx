const Register = () => {

    return(
        <div>
            <form>
                <div>
                    <label>email :</label><br/>
                    <input type="text" name="email"/><br/><br/>
                </div>
                <div>   // PERSONAL ACCOUNT
                    <h3>Create your personal account Big Remit</h3>
                    <div>
                        <label>What kind of account would you like to open today ? :</label><br/><br/>
                        <input type="radio" id="personal" name="drone" value="personal"/>
                        <label>Personal account: send, spend, and receive the world of less</label><br/>
                        <input type="radio" id="business" name="drone" value="business"/>
                        <label>Business account: do business or freelance work internationally</label><br/>
                    </div>
                    <div>
                        <label>Your country of primary residence :</label><br/>
                        <input type="text" name="country"/><br/><br/>
                        <label>Verify your phone number with a code :</label><br/>
                        <input type="number" name="phone"/><br/><br/>
                    </div>
                    <div>
                        <label>Enter the xx-digit-code</label><br/>
                        <input type="number" name="code"/><br/><br/>
                        <input type="button" name="submit" value="I didn't receive the code"/><br/><br/>
                    </div>
                    <div>
                        <label>Password :</label><br/>
                        <input type="text" name="password"/><br/><br/>
                        <label>Confirm password :</label><br/>
                        <input type="text" name="confirmPassword"/><br/><br/>
                    </div>
                    <div>
                        <h4>Personal information</h4>
                        <label>Full legal first and middle names :</label><br/>
                        <input type="text" name="name"/><br/><br/>
                        <label>Full legal last name(s) :</label><br/>
                        <input type="text" name="lastname"/><br/><br/>
                        <label>Date of birth :</label><br/>
                        <input type="date" name="date"/><br/><br/>
                    </div>
                    <div>
                        <h4>Personal address</h4>
                        <label>Country :</label><br/>
                        <input type="text" name="country"/><br/><br/>
                        <label>Address :</label><br/>
                        <input type="text" name="address"/><br/><br/>
                        <label>City :</label><br/>
                        <input type="text" name="city"/><br/><br/>
                        <label>Postal code :</label><br/>
                        <input type="number" name="postalCode"/><br/><br/>
                    </div>
                </div>
                <div> // BUSINESS ACCOUNT
                    <h3> Create business account setup </h3>
                    <div>
                        <label>Country :</label><br/>
                        <input type="text" name="country"/><br/><br/>
                        <label>Address :</label><br/>
                        <input type="text" name="address"/><br/><br/>
                        <label>City :</label><br/>
                        <input type="text" name="city"/><br/><br/>
                        <label>Postal code :</label><br/>
                        <input type="number" name="postalCode"/><br/><br/>
                        <label>Registered business name :</label><br/>
                        <input type="text" name="businessName"/><br/><br/>
                        <label>Business type :</label><br/>
                        <input type="text" name="businessType"/><br/><br/>
                    </div>
                    <div>
                        <label>Business phone number :</label><br/>
                        <input type="number" name="businessPhone"/><br/><br/>
                    </div>
                    <div>
                        <label>Enter the xx-digit-code :</label><br/>
                        <input type="number" name="code"/><br/><br/>
                    </div>
                    <div>
                        <label>Helps us your account faster without this information we can't verify your account :</label><br/>
                        <input type="text" name="categorie"/><br/><br/>
                        <input type="text" name="subcategorie"/><br/><br/>
                        <label>Email business :</label><br/>
                        <input type="text" name="emailBusiness"/><br/><br/>
                        <label>Do you have a website, social media, Amazon of Ebay profile ?</label><br/><br/>
                        <input type="radio" name="yes"/><label>Yes</label><br/>
                        <input type="radio" name="no"/><label>No</label><br/><br/>
                        <label>Size of your business :</label><br/>
                        <input type="number" name="sizeBusiness"/><br/><br/>
                    </div>
                    <div>
                        <h4>Personal information</h4>
                        <label>Full legal first and middle names :</label><br/>
                        <input type="text" name="name"/><br/><br/>
                        <label>Full legal last name(s) :</label><br/>
                        <input type="text" name="lastname"/><br/><br/>
                        <label>Date of birth :</label><br/>
                        <input type="date" name="date"/><br/><br/>
                    </div>
                    <div>
                        <h4>Personal address</h4>
                        <label>Country :</label><br/>
                        <input type="text" name="country"/><br/><br/>
                        <label>Address :</label><br/>
                        <input type="text" name="address"/><br/><br/>
                        <label>City :</label><br/>
                        <input type="text" name="city"/><br/><br/>
                        <label>Postal code :</label><br/>
                        <input type="number" name="postalCode"/><br/><br/>
                    </div>

                </div>
                <br/><br/>
                <input type="submit" name="submit"/><br/>
            </form>
        </div>
    )
}

export default Register