import React, { type FC } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LinkComponent } from 'shared/ui/Link'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('navbar')
  return (
    <nav className={classNames(styles.nav, {}, [className ?? ''])}>
      <div className={styles.nav__links}>
        <LinkComponent to='/'>
          {t('main')}
        </LinkComponent>
        <LinkComponent to='/about'>
          {t('about')}
        </LinkComponent>
      </div>
    </nav>
  )
}
