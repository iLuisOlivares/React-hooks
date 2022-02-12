import React, { useMemo, useState } from 'react'
import { UseCounter } from '../../hooks/UseCounter'

export const MemoHook = () => {

    const { counter, increment } = UseCounter(400);
    const [show, setShow] = useState(true);


    const procesoPesado = (iter) => {
        for (let i = 0; i < iter; i++) {
            console.log('Iterando');
        }

        return `Numero de iteraciones: ${iter} `;
    }

    const memoProcess = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div className='m-5'>
            <h1>MemoHook</h1>
            <h1>Counter: <small > {counter}</small> </h1>
            <p>
                {memoProcess}
            </p>

            <button className='btn btn-primary m-2' onClick={() => increment(1)}>+1</button>
            <button className='btn btn-primary m-2' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
