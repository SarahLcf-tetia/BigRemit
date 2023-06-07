import "./Style/TransactionCell.css";
const TransactionCell = () => {
    return (
        <div className="transactionCell">
            <div className="cell_id">
                <span className="text_id">JP</span>
            </div>
            <div className="group_textTransaction">
                <span className="title_transaction">Titre</span><br/>
                <span className="text_transaction">Nemo quaeso miretur, si post exsudatos </span>
            </div>
        </div>
    )
}

export default TransactionCell;