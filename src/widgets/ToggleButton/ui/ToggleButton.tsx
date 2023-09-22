import React, { type FC } from 'react'
import { ButtonComponent } from 'shared/ui/Button'
import HomeIcon from '../../../shared/assets/icons/home.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
  className?: string
  onClick?: () => void
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { className, onClick } = props

  return (
        <ButtonComponent className={classNames(styles.ToggleButton, {}, [className ?? ''])} onClick={onClick}>
            <HomeIcon />
        </ButtonComponent>
  )
}
