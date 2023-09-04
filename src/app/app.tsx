import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={changeTheme}>
                Change Theme
            </button>
            <main className='main'>
                <AppRouter />
            </main>
        </div>
    )
}