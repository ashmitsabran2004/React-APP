import React, { useState } from 'react';
const UseStateExample2 = () => {
    const [led, setLed] = useState({
        color: "red",
        intensity: "high",
        price: 50
    });
    const changeColor = () => {
        setLed((prevState) => {
            return ({...prevState, color: "blue"});
        })
    }
    return (
        <div>
            <h1>LED Details:</h1>
            <p>Color: {Led.color}</p>
            <p>Intensity: {Led.intensity}</p>
            <p>Price: ${Led.price}</p>
            <button onClick ={changeColor}>Change LED Color</button>
        </div>
    )
}
export default UseStateExample2;
