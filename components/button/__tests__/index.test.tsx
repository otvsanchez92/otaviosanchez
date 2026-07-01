import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../index'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders as link when href is provided', () => {
    render(<Button href="https://example.com">Link</Button>)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })
})
