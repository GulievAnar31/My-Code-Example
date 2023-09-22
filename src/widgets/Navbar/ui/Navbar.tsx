import React, { type FC } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LinkComponent } from 'shared/ui/Link'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  return (
        <nav className={classNames(styles.nav, {}, [className ?? ''])}>
            <div className={styles.nav__links}>
                <LinkComponent to='/'>
                    Main
                </LinkComponent>
                <LinkComponent to='/about'>
                    About
                </LinkComponent>
            </div>
        </nav>
  )
}
