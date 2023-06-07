import "./Style/Menu.css"
import Logo from "../Pictures/Logo_BigRemit.png"

const Menu = () => {

    return(
        <div className="navbar">
            <ul className="ul_navbar">
                <img className="image_logo_menu_user" src={Logo} alt="LogoBigRemit"/>
                <li className="li_navbar" ><a className="button_register a_navbar" href="/register?state=1">S'inscrire</a></li>
                <li className="li_navbar"><a className="a_navbar" href="/login?state=0">Connexion</a></li>
                <li className="li_navbar"><a className="a_navbar" href="#about">FR</a></li>
                <li className="li_navbar"><a className="a_navbar" href="#contact">Aide</a></li>
                <li className="li_navbar"><a className="a_navbar" href="#news">Tarification</a></li>
                <li className="li_navbar"><a className="a_navbar" href="/">BigRemit</a></li>
            </ul>
        </div>
    )
}

export default Menu