import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter';
import './index.scss';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<div><Counter /></div>);
