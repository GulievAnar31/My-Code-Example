import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.DARK;

const ThemeProvider = (props: React.PropsWithChildren) => {
    const { children } = props;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;