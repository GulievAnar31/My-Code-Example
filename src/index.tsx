import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { App } from './app/app'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import { PageLoader } from 'shared/ui/PageLoader'

const container = document.querySelector('#root')
if (!container) {
  throw new Error('Root element not found')
}

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>
)
