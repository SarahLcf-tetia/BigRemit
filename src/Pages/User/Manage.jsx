import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import SectionCell from "../../Components/Cell/SectionCell";
import Divider from "../../Components/Divider/Divider";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
const Manage = () => {
    /*
        BACK END
        - ...
     */
    return(
        <div className="manage">
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <h2 className="title_h2">Manage your account</h2>
                <div>
                    <h4 className="title_h4">Balances</h4>
                    <Divider/>
                    <SectionCell title="Account sponsor"/>
                    <SectionCell title="Auto Conversions"/>
                </div><br/>
                <div>
                    <h4 className="title_h4">Payments</h4>
                    <Divider/>
                    <SectionCell title="Direct debits"/>
                    <SectionCell title="Scheduled transfers"/>
                    <SectionCell title="Payment requests"/>
                    <SectionCell title="Receving Money without bank details"/>
                </div><br/>
                <div>
                    <h4 className="title_h4">Statements</h4>
                    <Divider/>
                    <SectionCell title="Statements and reports"/>
                </div><br/>
            </div>


        </div>
    )
}

export default Manage