import React, { type ReactNode, type ComponentType } from 'react'
import { withTranslation } from 'react-i18next'
import { type TFunction } from 'i18next'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  t: TFunction<'errorBoundary', string>
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: any) {
    if (error) {
      return { hasError: true }
    }
  }

  componentDidCatch (error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state

    if (hasError) {
      return (
        <div>
          <h1>{this.props.t('text')}</h1>
          <p>{this.state.hasError}</p>
          <PageError />
        </div>
      )
    }

    return this.props.children
  }
}

export default withTranslation('errorBoundary')(ErrorBoundary as ComponentType<any>)
