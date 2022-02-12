import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((incrementV) => {
        setCounter(c => c + incrementV);
    }, [setCounter]);

    return (
        <div className='m-5'>

            <h1>UseCallBackHook</h1>
            <p>Counter: {counter}</p>

            <ShowIncrement increment={increment}></ShowIncrement>



        </div>
    )
}
