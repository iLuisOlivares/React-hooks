import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('llamada small');
    return (
        <small>{value}</small>
    )
});
