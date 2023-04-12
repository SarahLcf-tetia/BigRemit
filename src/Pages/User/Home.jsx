import MenuUser from '../../Components/Navigation/MenuUser.jsx'
const Home = () => {

    return(
        <div>
            <h1>Home</h1>
            <input text="button" name="sendMoney" value="Send Money"/><br/><br/>
            <MenuUser/><br/><br/>

            <h4>Account</h4>
            <div>
                <div>
                    <p>0.00€</p>
                    <p>EUR</p>
                </div>
                <div>
                    <p>0.00€</p>
                    <p>EUR</p>
                </div>
            </div>

            <h4>Categorie</h4>
            <div>
                <div>
                    <p>Titre</p><br/>
                    <p>Nemo quaeso miretur, si post exsudatos </p>
                </div>
                <div>
                    <p>Titre</p><br/>
                    <p>Nemo quaeso miretur, si post exsudatos </p>
                </div>
            </div>

            <h4>Categorie</h4>

        </div>
    )
}

export default Home