import React, { useEffect, useState } from 'react';

function Counter(props) {
    let [counter, setCounter] = useState(0);
  
   const Increment=()=>{
       if(counter <10){
            setCounter(counter+1)

        }
    }
    const Decrement=()=>{
        if(counter > 0){
        setCounter(counter-1)

        }

    }

    return (
        <div>
            <h1>Counter :: {counter}</h1>
            
            <button onClick={() => Increment()}>+</button>
            <button onClick={() => Decrement()}>-</button>
        </div>
    );
}

export default Counter;
