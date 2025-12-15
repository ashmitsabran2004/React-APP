import React from 'react';
import './JSXBasics.css';
//JSX Expressions:

function calculateWeight(wt){
    return wt * 100;
}



function JSXBasics(){
    const x = 5 + 5;
    const tv = {
        brand: 'Samsung',
        color: 'Black',
        size: '55 inches'
    };
    const Click = () => {
        alert('Your PC has been hacked!')

    }
    const style1= {
        color: 'red',
        backgroundColor: 'grey',
        border: '2px solid white',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '10px',
        marginLeft: '10px'

    }
    return(
        <div className = "myClass">
            <h1>I have calculated {10 * 5}</h1>
            <h1>The sum is: {x}</h1>
            <h2>The weight is: {calculateWeight(5)}</h2>
            <h3>The television brand is : {tv.brand}, the color is : {tv.color}, the size is: {tv.size}</h3>
            <button onClick={Click} className = "button">Click Here to earn $100</button>

            <div style={style1}>
                <h2>Hello, this is a child division</h2>
            </div>
        </div>


    )
}


export default JSXBasics;
