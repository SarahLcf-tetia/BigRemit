const MenuTopUser = () => {

    const handleLogout = () => {
        window.location.replace("/")
    }
    const handleSetting = () => {
        window.location.replace("/setting")
    }

    const handleFaq = () => {
        window.location.replace("")
    }

    const handleNotification = () => {
        window.location.replace("")
    }

    const handleUser = () => {
        window.location.replace("/account")
    }
    return(
        <div className="menuTop">
            <button className="button_menuTop" onClick={handleUser}>?(U)</button>
            <button className="button_menuTop" onClick={handleNotification}>?(N)</button>
            <button className="button_menuTop" onClick={handleFaq}>?(F)</button>
            <button className="button_menuTop" onClick={handleSetting}>?(S)</button>
            <button className="button_menuTop" onClick={handleLogout}>?(D)</button>
        </div>
    )
}

export default MenuTopUser