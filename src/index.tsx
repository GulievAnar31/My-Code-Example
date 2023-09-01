import React from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss'
import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
