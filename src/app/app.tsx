import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <main className='main'>
                <AppRouter />
            </main>
        </div>
    )
}