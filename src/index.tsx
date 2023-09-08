import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss'
import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Suspense fallback="">
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>
);
