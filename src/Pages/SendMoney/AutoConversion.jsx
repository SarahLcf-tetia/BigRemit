import Modal from "react-modal";
import {useState} from "react";
import MenuUser from "../../Components/Navigation/MenuUser";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";

const AutoConversion = ({ title, link }) => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };
    return (
        <div className="autoConversionCell">
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <h1>Auto conversions</h1>
                <input type="button" name="Create" value="Create Auto Conversion" className="button_submit_login styled" onClick={handleShowModal}/>
                <table>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>USD</td>
                        <td>1000</td>
                        <td>1.2</td>
                        <td>1200</td>
                    </tr>
                </table>

                <div>
                    <Modal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        contentLabel="Create conversion"
                    >
                        <h2>Create à new conversion</h2>
                        <div>
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
                        </div>
                        <button onClick={handleCloseModal}>Send</button>

                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default AutoConversion;