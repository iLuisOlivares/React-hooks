import React from 'react';
import { UseCounter } from '../../hooks/UseCounter';

function CounterWithCustomHook() {

    const { state, increment, decrement, reset } = UseCounter();

    return (<div className='container p-5'>
        <h1>Counter with Hook: {state} </h1>
        <hr />
        <button onClick={() => increment(2)} className='text-white btn btn-info '>Incrementar</button>
        <button onClick={reset} className='btn btn-dark m-3'>reset</button>
        <button onClick={() => decrement(2)} className='btn btn-danger'>Decrementar</button>
    </div>);
}

export default CounterWithCustomHook;
