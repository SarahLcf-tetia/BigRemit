import Modal from 'react-modal';
import Divider from "../Divider/Divider";
const AddBankAccount = () => {

    return (
        <div>
                <h4 className="title_h4">Add bank account</h4>
                <Divider/>
                <p>Full name of the account holder : </p>
                <input className="field" type="text" name="account_bank" placeholder="account_bank"/><br/>
                <p>IBAN : </p>
                <input className="field" type="text" name="iban" placeholder="IBAN"/><br/>
                <select name="currency_start" id="currency_start">
                    <option value="">--Please choose an option--</option>
                    <option value="fr">fr</option>
                    <option value="usa">usa</option>
                </select>
                <button>Add Account</button>
        </div>
    )
}

export default AddBankAccount