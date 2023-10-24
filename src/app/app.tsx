import React, { Suspense, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { ToggleButton } from 'widgets/ToggleButton'
import { ToggleLanguageButton } from 'widgets/ToggleLanguageButton'
import { PageLoader } from 'shared/ui/PageLoader'

export const App = () => {
  const { theme } = useTheme()

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <ToggleButton onClick={onToggle} />
                <ToggleLanguageButton />
                {collapsed && <Navbar />}
                <ThemeSwitcher />
                <main className='content-page'>
                    <AppRouter />
                </main>
            </Suspense>
        </div>
  )
}
