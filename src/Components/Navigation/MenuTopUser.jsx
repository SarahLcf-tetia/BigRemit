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
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
            <button className="button_menuTop" onClick={handleUser}><span className="material-symbols-outlined">person</span></button>
            <button className="button_menuTop" onClick={handleNotification}><span className="material-symbols-outlined">notifications</span></button>
            <button className="button_menuTop" onClick={handleFaq}><span className="material-symbols-outlined">help</span></button>
            <button className="button_menuTop" onClick={handleSetting}><span className="material-symbols-outlined">settings</span></button>
            <button className="button_menuTop" onClick={handleLogout}><span className="material-symbols-outlined">logout</span></button>
        </div>
    )
}

export default MenuTopUser