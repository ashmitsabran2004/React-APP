import React, { useState } from 'react';

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    const incre = () => {
        setCount((preVal) => preVal + 1);
    };

    const decre = () => {
        setCount((preVal) => preVal - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incre}>Increase</button>
            <button onClick={decre}>Decrease</button>
        </div>
    );
};

export default UseStateExample;
