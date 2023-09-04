import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';

export const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <nav className='nav'>
                <Link to={'/'}>
                    Main
                </Link>
                <Link to={'/about'}>
                    About
                </Link>
                <button onClick={changeTheme}>
                    Change Theme
                </button>
            </nav>
            <main className='main'>
                <AppRouter />
            </main>
        </div>
    )
}