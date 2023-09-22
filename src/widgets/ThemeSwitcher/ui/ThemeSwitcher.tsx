import React, { type FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import ThemeLight from '../../../shared/assets/icons/themeLight.svg'
import { ButtonComponent } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { changeTheme } = useTheme()

  return (
        <ButtonComponent
            className={classNames(styles.button, {}, [className ?? ''])}
            onClick={changeTheme}
        >
            <ThemeLight />
        </ButtonComponent>
  )
}
