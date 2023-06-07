import MenuUser from "../../Components/Navigation/MenuUser";
import Divider from "../../Components/Divider/Divider";
import Button from "../../Components/Button/Button";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";

const Account = () => {
    /*
        BACK END
        - Get user data
        - Get user photo
        - Get user account
        - Get user personnal information
     */
    return(
        <div>
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <Divider/>
                <h4 className="title_h4">Your account</h4>
                <div className="section_imageAccount">
                    <div className="image_user">
                        <img src={""} alt={""}/>
                    </div>

                    <span>Add your account photo</span>
                    <div>
                        <Button text="Edit details" link=""/>
                        <Button text="view details" link=""/>
                    </div>
                </div>
                <div>
                    <h4 className="title_h4">Personnal information</h4>
                    <Divider/>
                    <div>
                        <div>
                            <p>Firstname</p>
                            <p className="output_firstname">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                        <div>
                            <p>Lastname</p>
                            <p className="output_lastname">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Date of birth</p>
                            <p className="output_dateOfBirth">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                        <div>
                            <p>Phone</p>
                            <p className="output_phone">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                    </div>
                    <h4 className="title_h4">Personnal information</h4>
                    <Divider/>
                    <div>
                        <div>
                            <p>Country</p>
                            <p className="output_country">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                        <div>
                            <p>City</p>
                            <p className="output_city">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Address</p>
                            <p className="output_address">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                        <div>
                            <p>Postale Code</p>
                            <p className="output_postaleCode">Nemo quaeso miretur, si post exsudatos </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Account