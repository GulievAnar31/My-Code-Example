import React, { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './Link.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LinkComponentProps extends LinkProps {
  className?: string
}

export const LinkComponent: FC<LinkComponentProps> = (props) => {
  const { className, to, children } = props
  return (
        <Link className={classNames(styles.Link, {}, [className ?? ''])} to={to}>
            {children}
        </Link>
  )
}
