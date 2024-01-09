const ParentB = (props) => {
    return (
        <div>
            <ul>
                <li>{props.myObj['name']}</li>
                <li>{props.myObj['age']}</li>
            </ul>
            <button onClick={props.myFunc}>Click Me</button>
        </div>
    );
};

export default ParentB;