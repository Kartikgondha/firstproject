import React, { useEffect, useState } from 'react';

function Counter(props) {
    let [counter, setCounter] = useState(0);
  
    useEffect(()=>{
    
    switch (counter) {
        case counter + 1 <=10:
            
            break;
    
        default:
            break;
    }


   },[])
    return (
        <div>
            <h1>Counter :: {counter}</h1>
            
            <button onClick={() => setCounter(counter + 1 )}>+</button>
            <button onClick={() => setCounter(counter - 1 )}>-</button>
        </div>
    );
}

export default Counter;
