import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
