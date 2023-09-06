import React, { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export const ButtonComponent: FC<ButtonProps> = (props) => {
    const { className, onClick, children } = props;

    return (
        <button
            className={classNames(styles.button, {}, [className])}
            onClick={onClick}
        >
            { children }
        </button>
    )
}