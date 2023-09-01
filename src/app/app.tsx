import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage';
import { AboutPageSync } from 'pages/AboutPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/about' element={<AboutPageSync />} />
                        <Route path='/' element={<MainPageAsync />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}