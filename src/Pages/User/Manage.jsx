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
                    <SectionCell title="Account sponsor" link="/sponsor" icon={"link"}/>
                    <SectionCell title="Auto Conversions" link="/autoConversion" icon={"calculate"}/>
                </div><br/>
                <div>
                    <h4 className="title_h4">Payments</h4>
                    <Divider/>
                    <SectionCell title="Direct debits" link="/sendMoney" icon={"line_start"}/>
                    <SectionCell title="Scheduled transfers" link="sendMoneyScheduled" icon={"calendar_month"}/>
                    <SectionCell title="Payment requests" link="/requestMoney" icon={"list_alt"}/>
                    <SectionCell title="Receving Money without bank details" link="/transactionMoney" icon={"receipt_long"}/>
                </div><br/>
                <div>
                    <h4 className="title_h4">Statements</h4>
                    <Divider/>
                    <SectionCell title="Statements and reports" icon={"bug_report"}/>
                </div><br/>
            </div>


        </div>
    )
}

export default Manage