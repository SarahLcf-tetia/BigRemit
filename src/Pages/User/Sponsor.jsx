import MenuUser from '../../Components/Navigation/MenuUser.jsx'
import Divider from "../../Components/Divider/Divider";
import MenuTopUser from "../../Components/Navigation/MenuTopUser";
const Sponsor = () => {
    /*
        BACK END
        - GET Code Sponsor
     */
    return(
        <div className="sponsor">
            <MenuUser/>
            <MenuTopUser/>
            <div className="border_page">
                <Divider/>
                <h4 className="title_h4">Invite 3 friends and earn …</h4>
                <Divider/>
                <input type="text" placeholder="https://big-remit.com/invite/kjazdl"/>
                <input type="button" value="Share"/>
            </div>
        </div>
    )
}

export default Sponsor