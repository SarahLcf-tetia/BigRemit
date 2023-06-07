import './Style/Button.css'

const Button = (props) => {

    const handleDirection = () => {
        window.location.replace(props.link)
    }

    return(
        <button className="favorite styled"
                type="button"  onClick={handleDirection}>
            {props.text}
        </button>

    )
}

export default Button