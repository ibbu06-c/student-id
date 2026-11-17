function Studentcard(props) {
    return (
        <div className="Studentcard">
            <h2>{props.name}</h2>
            <p>Department: {props.dept}</p>
            <p>Year: {props.year}</p>
        </div>
    );
}
export default Studentcard;