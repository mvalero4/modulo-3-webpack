import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Saludo } from './Saludo';
import './style.scss';

const root = createRoot(document.getElementById('root'));
root.render(<Saludo />);