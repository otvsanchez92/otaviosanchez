'use client'
import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'default' | 'alternative' | 'transparent'
  href?: string
  target?: string
  'data-testid'?: string
  id?: string
}

export function Button({ children, onClick, type = 'default', href, target, 'data-testid': dataTestId, id }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 font-["PlexusSans-Regular",sans-serif] text-sm cursor-pointer transition-all duration-300 border-none outline-none no-underline'

  const typeClasses = {
    default: 'bg-white text-[#333333] hover:opacity-70',
    alternative: 'bg-[#5652CC] text-white hover:bg-[#33317a]',
    transparent: 'bg-transparent text-[#5652CC] border border-[#5652CC] hover:bg-[#5652CC] hover:text-white transition-colors duration-300',
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={cn(baseClasses, typeClasses[type])}
        data-testid={dataTestId}
        id={id}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, typeClasses[type])}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </button>
  )
}

export default Button
