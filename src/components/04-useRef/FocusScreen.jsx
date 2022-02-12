import React, { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        // console.log('click');
        inputRef.current.select();
        console.log(inputRef);

    }

    return <div className='m-5'>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text"
            className='form-control'
            placeholder='Su nombre'
        />

        <button
            className='btn btn-outline-dark mt-3'
            onClick={handleClick}
        >
            Focus
        </button>


    </div>;
};
