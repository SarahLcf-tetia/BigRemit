import "./Style/SectionCell.css";
const SectionCell = (props) => {

    if(props.link == null)
        return (
        <div className="sectionCell">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
            <div className="cell_id">
                <span className="text_id"><span className="material-symbols-outlined">{props.icon}</span></span>
            </div>
            <div className="group_textSection">
                <span className="title_section">{props.title}</span><br/>
            </div>
        </div>
    )

    const handleClick = () => {
        document.location.href = props.link;
    }
    return (
        <div className="sectionCell" onClick={handleClick}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
            <div className="cell_id">
                <span className="text_id"><span className="material-symbols-outlined">{props.icon}</span></span>
            </div>
            <div className="group_textSection">
                <span className="title_section">{props.title}</span><br/>
            </div>
        </div>
    )
}

export default SectionCell;