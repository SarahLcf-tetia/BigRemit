import Divider from "../Divider/Divider";

const AddARecipient = () => {
    return (
        <div>
            <h4 className="title_h4">Add a recipient</h4>
            <Divider/>
            <p>Email : </p>
            <input className="field" type="text" name="email" placeholder="email"/><br/>
            <p>Select a recipient type : </p>
            <div>
                <input type="radio" id="personnal" name="recipient" value="personnal" checked/>
                <label for="personnal">Personnal</label>
                <input type="radio" id="business" name="recipient" value="business"/>
                <label for="business">Business</label>
            </div>
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

export default AddARecipient