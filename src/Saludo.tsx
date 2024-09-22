import React from 'react';
import { FC } from "react";
import logo from './assets/logo.png';

export const Saludo: FC = () => {
    const apiKey: string = process.env.REACT_APP_API_BASE;

    return (
        <div className='container'>
            <h1>Hola Mundo!!!</h1>
            <img src={logo} alt="Logo Lemon Code" />
            <p>Api server is {apiKey}</p>
        </div>
    )
};