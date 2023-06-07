import Menu from '../../Components/Navigation/Menu.jsx'
import Spacer from '../../Components/Navigation/Spacer.jsx'
import Button from '../../Components/Button/Button'
import ImageIphone from '../../Components/Pictures/iphone.png'
import './Style/Home.css'

const Home = () => {

    /*
        BACK END
        - ...
     */

    return(
        <div>
            <Menu/>
            <Spacer/>
            <div>
                <div className="part_left_home">
                    <h1 className="title_H1_home">Transfert ou paiement <br/> de montants important.</h1>
                    <br/>
                    <h3 className="title_H3_home">Nous transférons votre argent en toute sécurité,<br/> rapidement et sans frais cachés.</h3>
                    <br/>
                    <Button text="Comment ça marche ?" link="/Home"/>
                    <br/>
                    <div className="smallParts">
                        <div className="smallPart_left">
                            <p>Régulé par la FCA</p>
                            <span>En savoir plus ></span>
                        </div>
                        <div className="smallPart_right" >
                            <p>Plusieurs milliers de clients</p>
                            <span>Lire sur Trustpilot ></span>
                        </div>
                    </div>
                </div>
                <div className="part_right_home">
                    <img src={ImageIphone} alt={"img iphone"} className="image_iphone_home"/>
                </div>
            </div>
        </div>
    )
}

export default Home