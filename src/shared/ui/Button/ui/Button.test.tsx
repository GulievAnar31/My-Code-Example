import React from 'react'
import { render, screen } from '@testing-library/react'
import { ButtonComponent } from './Button'

describe('ButtonTest', () => {
  test('Render', () => {
    render(<ButtonComponent>{'Test'}</ButtonComponent>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('ClassName with clear', () => {
    render(<ButtonComponent className='clear'>{'Test'}</ButtonComponent>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
