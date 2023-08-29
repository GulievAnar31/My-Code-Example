import React from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const sumOne = () => {
        setCount(prev => prev + 1);
    }

    return (
        <span onClick={() => sumOne()} className={styles.counter}>
            {count}
        </span>
    )
}