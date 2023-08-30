import React from 'react';
import { Counter } from '../Counter';
import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from '../../pages/MainPage/MainPage.async';
import { AboutPageSync } from '../../pages/AboutPage/AboutPage.async';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>
                    Main
                </Link>
                <Link to={'/about'}>
                    About
                </Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageSync />} />
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/counter' element={<Counter />} />
                </Routes>
            </Suspense>
        </div>
    )
}