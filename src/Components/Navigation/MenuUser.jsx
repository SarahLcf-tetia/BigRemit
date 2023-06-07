import Logo from "../Pictures/Logo_white_BR.png";
import Button from "../Button/Button";
import "./Style/Menu.css"
const MenuUser = () => {

    return(
        <div className="menu">
            <ul className="ul_navbar_user">
                <img className="image_logo_menu_user" src={Logo} alt="LogoBigRemit"/>
                <Button text="Send Money" link="/sendMoney"/><br/><br/>
                <div className="small_spacer"/>
                <li><a className="li_a_navbar_user" href="/user">Home</a></li>
                <li><a className="li_a_navbar_user" href="/account">Account</a></li>
                <li><a className="li_a_navbar_user" href="/recipients">Recipients</a></li>
                <li><a className="li_a_navbar_user" href="/manage">Manage</a></li>
                <li><a className="li_a_navbar_user" href="/sponsor">Sponsor</a></li>
            </ul>
        </div>
    )
}

export default MenuUser