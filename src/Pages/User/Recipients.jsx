import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import Divider from "../../Components/Divider/Divider";
import SectionCell from "../../Components/Cell/SectionCell";
import SmallSpacer from "../../Components/Navigation/SmallSpacer";
import Button from "../../Components/Button/Button";
import AddBankAccount from "../../Components/Modal/AddBankAccount";
import AddARecipient from "../../Components/Modal/AddARecipient";
import Modal from "react-modal";
import {useState} from "react";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
const Recipients = () => {

    const [showModalBank, setShowModalBank] = useState(false);
    const [showModalRecipent, setShowModalRecipent] = useState(false);
    const handleCloseModalBank = () => {
        setShowModalBank(false);
    };
    const handleShowModalBank = () => {
        setShowModalBank(true);
    };

    const handleCloseModalRecipent = () => {
        setShowModalRecipent(false);
    };
    const handleShowModalRecipent = () => {
        setShowModalRecipent(true);
    };

    /*
        BACK END
        - POST BankAccount
        - POST Recipient
     */

    return(
        <div>

            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <Divider/>
                <h2 className="title_h2">Recipients</h2>
                <div>
                    <button onClick={handleShowModalBank} className="styled">Add bank account</button>
                    <button onClick={handleShowModalRecipent} className="styled">Add a recipient</button>
                </div>
                <h4 className="title_h4">Yours accounts</h4>
                <Divider/>
                <SectionCell title="Add your bank account"/>
                <SmallSpacer/>
                <h4 className="title_h4">Yours recipients</h4>
                <Divider/>
                <SectionCell title="Sart by adding a recipient"/>
                <SmallSpacer/>
            </div>

            <Modal
                isOpen={showModalBank}
                onRequestClose={handleCloseModalBank}
                contentLabel="Add bank account">
                <button onClick={handleCloseModalBank}>Back</button>
                <AddBankAccount/>
            </Modal>
            <Modal
                isOpen={showModalRecipent}
                onRequestClose={handleCloseModalRecipent}
                contentLabel="Add bank account">
                <button onClick={handleCloseModalRecipent}>Back</button>
                <AddARecipient/>
            </Modal>
        </div>
    )
}

export default Recipients