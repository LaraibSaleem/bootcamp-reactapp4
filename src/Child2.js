import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 0)
    console.log(state)
    return (
        <div>
            <h1>This is second child i.e for counterReducer</h1>

            <h2>Value of 'state' is {state}</h2>

            <button onClick={() => dispatch('INCREMENT')} > Increment Reducer </button>

            <h3>Change for Auto Deployment Check 3</h3>
        </div>
    )

}

export default Child2;