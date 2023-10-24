import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

const AppRouter = () => {
  return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => {
                      return (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                      )
                    })
                }
            </Routes>
        </Suspense>
  )
}

export default AppRouter
