'use client'
import React from 'react'

interface Props {
  children: React.ReactNode
  activeEffect: boolean
}

export function Content({ activeEffect, children }: Props) {
  return (
    <>
      {/* BackgroundOut - purple/alt layer */}
      <div
        className="transition-all duration-1000 ease-in-out bg-[#a3a9d0] w-[200%] h-screen fixed z-0"
        style={{
          transform: activeEffect ? 'rotate(-20deg)' : 'rotate(-3deg)',
          top: activeEffect ? '0' : '-98%',
          left: activeEffect ? '-40%' : '-20%',
        }}
      />
      {/* Background - main grey layer */}
      <div
        className="transition-all duration-1000 ease-in-out bg-[#efefef] w-[200%] h-screen fixed z-0"
        style={{
          transform: activeEffect ? 'rotate(0)' : 'rotate(-12deg)',
          top: activeEffect ? '0' : '-98%',
          left: activeEffect ? '0' : '-40%',
        }}
      />
      {/* Main content on top */}
      <div className="relative z-[1]">
        {children}
      </div>
    </>
  )
}

export default Content
