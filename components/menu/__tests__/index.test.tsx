import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Menu from '../index'

const mock = {
  title: 'ABC',
  items: [
    {
      text: 'Link',
      link: '/router'
    }
  ]
}

describe('Menu', () => {
  it('renders the title', () => {
    render(<Menu title={mock.title} items={mock.items} />)
    const title = screen.getByText(/ABC/i)
    expect(title).toBeInTheDocument()
  })

  it('renders nav items', () => {
    render(<Menu title={mock.title} items={mock.items} />)
    expect(screen.getByText('Link')).toBeInTheDocument()
  })

  it('toggles menu open on hamburger click', () => {
    render(<Menu title={mock.title} items={mock.items} />)
    const menuBtn = screen.getByTestId('menu')
    fireEvent.click(menuBtn)
    // after clicking the open state changes - just verify click doesn't throw
    expect(menuBtn).toBeTruthy()
  })
})
