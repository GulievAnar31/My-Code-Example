import React, { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import ThemeLight from '../../../shared/assets/icons/themeLight.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { changeTheme } = useTheme();

    return (
        <button
            className={classNames(styles.button, {}, [className])}
            onClick={changeTheme}
        >
            <ThemeLight />
        </button>
    )
};
