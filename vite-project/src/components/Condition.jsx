const Condition = () => {
    const marks = 90;
    let result1 = '';
    let result2 = '';

    // if else
    if(marks > 79){
        result1 = 'Great Job...'; 
    }else{
        result1 = 'Try more...';
    }
    // Short if else
    marks >= 90 ? result2 = 'Very well done': result2 ='Average';

    // Immediately Invoked function expression
    // (() => {})()
    let holiday = true;

    





    return (
        
        <div>
            <h2>{result2}</h2>
            <h3>{result1}</h3>  
            <button>{
                    (() => {
                        if(holiday){
                            return 'Yeah......Holiday';
                        }else{
                            return 'Ops.......Office';
                        }
                    })()
            }</button>          
        </div>
    );

    
    
};

export default Condition;