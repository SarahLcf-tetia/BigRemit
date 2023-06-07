import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import WalletCell from "../../Components/Cell/WalletCell";
import Divider from "../../Components/Divider/Divider";
import TransactionCell from "../../Components/Cell/TransactionCell";
import "./Style/Style.css"
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
const Home = () => {

    /*
        BACK END
        - ...

     */

    return(
        <div>
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <h4 className="title_h4">Account</h4>
                <Divider/>
                <WalletCell/>
                <h4 className="title_h4">Transactions</h4>
                <Divider/>
                <div>
                    <TransactionCell/>
                    <TransactionCell/>
                </div>
                <h4 className="title_h4">Categorie</h4>
                <Divider/>
            </div>
        </div>
    )
}

export default Home