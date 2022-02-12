import React, { useState } from 'react'
import { UseCounter } from '../../hooks/UseCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = UseCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div className='m-5'>
            <h1>Counter: <Small value={counter}></Small> </h1>

            <button className='btn btn-primary m-2' onClick={() => increment(1)}>+1</button>
            <button className='btn btn-primary m-2' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
