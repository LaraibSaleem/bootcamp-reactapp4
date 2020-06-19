import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';

function App() {
  let countState = useState(0) //countState is an array now having 2 indexes, 1 is number, 2 is setter
  //let [count, setCount] = useState(20)
  return (
    <counterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
