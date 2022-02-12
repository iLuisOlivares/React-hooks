import React, { useState } from 'react';
import { MultiCustomHooks } from '../03-examples/MultiCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return <div className='m-5'>
        <h1 >Real Example Ref</h1>
        <hr />

        {show && <MultiCustomHooks></MultiCustomHooks>}

        <button
            className='btn btn-outline-info'
            onClick={() => { setShow(!show) }}
        >Show/Hide</button>

    </div>;
};
