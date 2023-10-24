import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'
import { PageLoader } from 'shared/ui/PageLoader'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation('notFound')
  return (
    <div className={styles.notFound}>
        <span><PageLoader />{t('notFound')}</span>
    </div>
  )
}

export default NotFoundPage
