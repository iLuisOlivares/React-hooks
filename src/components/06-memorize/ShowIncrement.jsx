import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me incremente');


    return (
        <button
            onClick={() => increment(5)}
            className='btn btn-outline-warning'> incrementar</button>
    )
})
