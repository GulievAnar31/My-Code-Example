import { type FC } from 'react'
import styles from './PageError.module.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PageError: FC = () => {
  const { t } = useTranslation('errorBoundary')
  return (
        <div className={styles.errorPage}>
            <span>{t('error')}</span>
            <button onClick={() => { location.reload() }}>
                {t('reload')}
            </button>
        </div>
  )
}
