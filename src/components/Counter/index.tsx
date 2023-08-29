import React from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const sumOne = () => {
        setCount(prev => prev + 1);
    }

    return (
        <span onClick={() => sumOne()} className='counter'>
            {count}
        </span>
    )
}