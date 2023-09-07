import MenuUser from "../../Components/Navigation/MenuUser";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
import Divider from "../../Components/Divider/Divider";
import WalletCell from "../../Components/Cell/WalletCell";
import TransactionCell from "../../Components/Cell/TransactionCell";

const TransactionMoney = () => {
    return (
        <div>
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">

                <h4 className="title_h4">Transactions</h4>
                <Divider/>
                <div>
                    <TransactionCell/>
                    <TransactionCell/>
                </div>
            </div>
        </div>
    )
}

export default TransactionMoney