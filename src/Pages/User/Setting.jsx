import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import SectionCell from "../../Components/Cell/SectionCell";
import Divider from "../../Components/Divider/Divider";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
const Setting = () => {

    /*
        BACK END
        - ...
     */

    return (
        <div>
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <Divider/>
                <h2 className="title_h2">Settings</h2><br/>
                <SectionCell title="Email setting"/>
                <SectionCell title="Notifiction"/>
                <SectionCell title="Connected accounts"/>
                <SectionCell title="Langages setting"/>
                <SectionCell title="Change password"/>
                <SectionCell title="Contact on Big Remit"/>
                <SectionCell title="Two-factor authantification"/>
                <SectionCell title="Secure communication code"/>
                <SectionCell title="Close your account"/>
            </div>
        </div>
    )
}

export default Setting