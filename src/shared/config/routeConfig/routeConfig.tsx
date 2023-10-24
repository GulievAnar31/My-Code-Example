import React from 'react'
import { AboutPageSync } from 'pages/AboutPage'
import { MainPageAsync } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'
import { NotFoundPageSync } from 'pages/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageSync />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPageSync />
  }
}
