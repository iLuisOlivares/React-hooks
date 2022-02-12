import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';


export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Cambio el input');
    }, [formValues]);

    // const handleInputChange = ({ target }) => {
    //     setFormState({
    //         ...formState,
    //         [target.name]: target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }
    return (<div className='container p-5'>

        <h1>FormWithCustomHook</h1>
        <hr />

        <form onSubmit={handleSubmit} className='form-group'>
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
            <input
                type="password"
                name='password'
                placeholder='Tu contraseña'
                autoComplete='off'
                className='form-control m-1'
                value={password}
                onChange={handleInputChange} />

            <button className='btn btn-info m-2'>
                Guardar
            </button>
        </form>

        {(name == 123) && <Message></Message>}

    </div>);
};
