import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Child() {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h1>This is first Child i.e for counterContext</h1>

            <h2>Value of 'counterValue' is {counterValue[0]}</h2>

            <button onClick={()=> {counterValue[1](++counterValue[0])}} > Increment Context </button>

            <h3>Change for Auto Deployment Check </h3>
        </div>
    );
}

export default Child;