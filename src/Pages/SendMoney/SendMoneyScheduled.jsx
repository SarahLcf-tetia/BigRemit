import Button from "../../Components/Button/Button";
import Divider from "../../Components/Divider/Divider";
import SectionCell from "../../Components/Cell/SectionCell";
import Modal from "react-modal";
import {useState} from "react";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";

const SendMoney = () => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.href = "/user";
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleNext = (oldSection, newSection) => {
        document.getElementsByClassName(oldSection)[0].style.display = "none";
        document.getElementsByClassName(newSection)[0].style.display = "block";
    }

    const handleBack = (oldSection, newSection) => {
        document.getElementsByClassName(oldSection)[0].style.display = "none";
        document.getElementsByClassName(newSection)[0].style.display = "block";
    }

    /*
        BACK END
        - POST SendMoney
     */

    return (
        <div>
            <MenuTopUser/>
            <Button text="Back" link="/user"/><br/><br/>
            <div className="section_a">
                <input type="date" name="dateScheduled"/>
                <div>
                    <input type="text" placeholder="1069,59"/>
                    <select name="currency_start" id="currency_start">
                        <option value="">--Please choose an option--</option>
                        <option value="fr">fr</option>
                        <option value="usa">usa</option>
                    </select>
                </div>
                <div>
                    <p>Change : {}</p>
                    <p>Rate : {}</p>
                    <p>Service Big Remit : {}</p>
                </div>
                <div>
                    <input type="text" placeholder="1000"/>
                    <select name="currency_start" id="currency_start">
                        <option value="">--Please choose an option--</option>
                        <option value="fr">fr</option>
                        <option value="usa">usa</option>
                    </select>
                </div>
                <br/>
                <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                    handleNext("section_a", "section_b")}/>
            </div>
            <div className="section_b" style={{display: "none"}}>
               <h4 className="title_h4">Who’s your new contact ?</h4>
                <SectionCell title="Myself"/>
                <SectionCell title="Someone else"/>
                <SectionCell title="Business"/>
                <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                    handleNext("section_b", "section_c")}/>
            </div>
            <div className="section_c" style={{display: "none"}}>
                <h4 className="title_h4">Who’s your new contact ?</h4>
                <label>Full name of the account holder : </label><br/>
                <input type="text" placeholder="account"/><br/>
                <label>IBAN : </label><br/>
                <input type="text" placeholder="IBAN"/><br/>
                <br/>
                <input type="button" name="Next" value="Next" className="button_submit_login styled" onClick={() =>
                    handleNext("section_c", "section_d")}/>
            </div>
            <div className="section_d" style={{display: "none"}}>
                <h4 className="title_h4">Payment details</h4>
                <div>
                    <p>Resume payment ...</p>
                </div>
                <br/><button onClick={handleShowModal}>Confirm</button> <button>Cancel</button>
            </div>
            <div>
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="Ma Pop-up"
                >
                    <h2>Your payment is accepted</h2>
                    <div>Content detail pop-up</div>
                    <button onClick={handleCloseModal}>Fermer</button>

                </Modal>
            </div>
        </div>
    )
}

export default SendMoney