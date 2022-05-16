import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    
    const reset = () => {
        setCount(0)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={() => increase()}>plus</button>
            <button type="button" onClick={() => decrease()}>minus</button>
            <button type="button" onClick={() => reset()}>reset</button>
        </div>
    );
}

export default Counter;
