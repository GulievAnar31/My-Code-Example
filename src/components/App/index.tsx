import React, { Suspense } from 'react';
import { Counter } from '../Counter';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from '../../pages/MainPage/MainPage.async';
import { AboutPageSync } from '../../pages/AboutPage/AboutPage.async';
import { useTheme } from '../../theme/useTheme';
import { classNames } from '../../helpers/classNames/classNames';

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
                        <Route path='/counter' element={<Counter />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}