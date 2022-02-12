import React, { useState } from 'react';

function CounterApp() {

    const [state, setState] = useState({
        count1: 0,
        count2: 10,
        count3: 10,
        count4: 10
    });

    const { count1, count2 } = state;

    console.log(count2);
    return (<div className='container p-5'>
        <h1>Counter {count1}</h1>
        <h1>Counter {count2}</h1>
        <hr />

        <button className='btn btn-info' onClick={(e) => {
            setState({
                ...state,
                count1: count1 + 1
            });
        }}>Incrementar</button>
    </div >);
}

export default CounterApp;
