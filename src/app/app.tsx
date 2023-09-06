import React, { useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ToggleButton } from 'widgets/ToggleButton';

export const App = () => {
    const { theme } = useTheme();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames('app', {}, [theme])}>
            <ToggleButton onClick={onToggle} />
            {collapsed && <Navbar />}
            <ThemeSwitcher />   
            <main className='content-page'>
                <AppRouter />
            </main>
        </div>
    )
}