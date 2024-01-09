import ParentB from "./ParentB";
const ParentA = (props) => {
    const myObj = {
        name: 'Azharul',
        age: 26
    }

    const clickMe = () => {
        alert('You clicked me!');
    }
    return (
        <div>
            <h1>{ props.title }</h1>
            <ParentB myObj={myObj} myFunc={clickMe}/>
        </div>
    );
};

export default ParentA;