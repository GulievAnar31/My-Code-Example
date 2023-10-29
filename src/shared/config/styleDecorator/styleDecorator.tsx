import 'app/styles/index.scss';
import React, { FC, PropsWithChildren } from 'react';

export const StyleDecorator: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}