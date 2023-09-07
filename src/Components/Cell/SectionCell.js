import "./Style/SectionCell.css";
const SectionCell = (props) => {

    const handleClick = () => {
        document.location.href = props.link;
    }
    return (
        <div className="sectionCell" onClick={handleClick}>
            <div className="cell_id">
                <span className="text_id">?</span>
            </div>
            <div className="group_textSection">
                <span className="title_section">{props.title}</span><br/>
            </div>
        </div>
    )
}

export default SectionCell;