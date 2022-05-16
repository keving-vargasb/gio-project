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

    function random(min, max) {
        const number= Math.floor((Math.random() * (max - min + 1)) + min);   
          setCount(number)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={() => increase()}>plus</button>
            <button type="button" onClick={() => decrease()}>minus</button>
            <button type="button" onClick={() => reset()}>reset</button>
            <button type="button" onClick={() => random(1, 100)}>random</button>
            <button type="button" onClick={() => random(1000, 2000)}>more random</button>
        </div>
    );
}

export default Counter;
