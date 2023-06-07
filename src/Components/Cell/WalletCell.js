import flagEU from '../Pictures/eu.png';
import "./Style/WalletCell.css";
const WalletCell = () => {

    return(
        <div className="walletCell">
            <img src={flagEU} className="flag_icon" alt="img"/>
            <div className="text_wallet">
                <span className="text_priceWallet">0.00 €</span><br/>
                <span className="text_devisWallet">EUR</span>
            </div>
        </div>
    )
}

export default WalletCell;