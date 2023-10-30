import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonComponent } from './Button'
import { StyleDecorator } from 'shared/config/styleDecorator/styleDecorator'

const meta = {
  title: 'Example/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    (Story) => (
          <StyleDecorator>
            <Story />
          </StyleDecorator>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: 'default',
    onClick: () => { console.log('click') },
    children: <span>{'Test'}</span>
  }
}
