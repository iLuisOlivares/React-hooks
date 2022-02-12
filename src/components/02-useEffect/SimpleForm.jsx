import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    useEffect(() => {
        console.log('Cambio el input');
    }, [formState]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    const { name, email } = formState;

    return (<div className='container p-5'>

        <h1>useEffect</h1>
        <hr />

        <div className='form-group'>
            <input
                type="text"
                name='name'
                placeholder='Tu nombre'
                autoComplete='off'
                className='form-control m-1'
                value={name}
                onChange={handleInputChange} />

            <input
                type="email"
                name='email'
                placeholder='Tu Email'
                autoComplete='off'
                className='form-control m-1'
                value={email}
                onChange={handleInputChange} />
        </div>

        {(name == 123) && <Message></Message>}

    </div>);
};
