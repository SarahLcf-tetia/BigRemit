const MenuUser = () => {

    return(
        <div className="menu">
            <input text="button" name="sendMoney" value="Send Money"/><br/><br/>
            <ul>
                <li><a href="/user">Home</a></li>
                <li><a href="/account">Account</a></li>
                <li><a href="/recipients">Recipients</a></li>
                <li><a href="/manage">Manage</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
            </ul>
        </div>
    )
}

export default MenuUser