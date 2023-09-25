import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import SectionCell from "../../Components/Cell/SectionCell";
import Divider from "../../Components/Divider/Divider";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
import AddBankAccount from "../../Components/Modal/AddBankAccount";
import Modal from "react-modal";
import EmailSetting from "../Settings/EmailSetting";
import {useState} from "react";
const Setting = () => {

    /*
        BACK END
        - ...
     */

    const [visibleSection, setVisibleSection] = useState('');

    const showSection = (section) => {
        if(visibleSection === section) {
            setVisibleSection('');
        } else {
            setVisibleSection(section);
        }
    }

    return (
        <div>
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <Divider/>
                <h2 className="title_h2">Settings</h2><br/>
                <div onClick={() => showSection("setting_section_A")}><SectionCell title="Email setting" icon={"mail"}/></div>
                <div className={visibleSection === "setting_section_A" ? "" : "hidden"}>
                    <p>Change your email :</p>
                    <input type="text" placeholder="Email"/>
                    <input type={"submit"} value={"send"}/>
                </div>
                <div onClick={() => showSection("setting_section_B")}><SectionCell title="Notifiction" icon={"notifications"}/></div>
                <div className={visibleSection === "setting_section_B" ? "" : "hidden"}>
                    <input type="checkbox" id="notif1" name="notif1" value="notif1"/>
                    <label htmlFor="notif1">Receive an email when you receive money</label><br/>
                </div>
                <div onClick={() => showSection("setting_section_C")}><SectionCell title="Languages setting" icon={"language"}/></div>
                <div className={visibleSection === "setting_section_C" ? "" : "hidden"}>
                    <p>Change your language :</p>
                    <select>
                        <option value="english">English</option>
                        <option value="french">French</option>
                    </select>
                    <input type={"submit"} value={"send"}/>
                </div>
                <div onClick={() => showSection("setting_section_D")}><SectionCell title="Change password" icon={"badge"}/></div>
                <div className={visibleSection === "setting_section_D" ? "" : "hidden"}>
                    <p>Change your password :</p>
                    <input type="password" placeholder="Old password"/><br/>
                    <input type="password" placeholder="New password"/><br/>
                    <input type="password" placeholder="Confirm new password"/><br/>
                    <input type={"submit"} value={"send"}/>
                </div>
                <div onClick={() => showSection("setting_section_E")}><SectionCell title="Contact on Big Remit" icon={"support"}/></div>
                <div className={visibleSection === "setting_section_E" ? "" : "hidden"}>
                    <p>Contact support :</p>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message"/>
                    <input type={"submit"} value={"send"}/>
                </div>
                <div onClick={() => showSection("setting_section_F")}><SectionCell title="Two-factor authantification" icon={"security"}/></div>
                <div className={visibleSection === "setting_section_F" ? "" : "hidden"}>
                    <p>Two-factor authantification :</p>
                    <input type="checkbox" id="notif1" name="notif1" value="notif1"/>
                    <label htmlFor="notif1">Enable two-factor authantification</label><br/>
                </div>
                <div onClick={() => showSection("setting_section_G")}><SectionCell title="Secure communication code" icon={"lock"}/></div>
                <div className={visibleSection === "setting_section_G" ? "" : "hidden"}>
                    <p>Secure communication code :</p>
                    <input type="text" placeholder="Secure communication code"/>
                    <input type={"submit"} value={"send"}/>
                </div>
                <div onClick={() => showSection("setting_section_H")}><SectionCell title="Close your account" icon={"delete_forever"}/></div>
                <div className={visibleSection === "setting_section_H" ? "" : "hidden"}>
                    <p>Close your account :</p>
                    <input type="checkbox" id="notif1" name="notif1" value="notif1"/>
                    <label htmlFor="notif1">I want to close my account</label><br/>
                </div>
            </div>
        </div>
    )
}

export default Setting