'use client'
import React, { useEffect, useState } from 'react'

export function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div
      className="transition-all duration-[2s] ease-out fixed w-screen h-screen bg-[#5652CC] z-[100] top-0 left-0"
      style={{
        top: isLoading ? '0' : '-100%',
      }}
    />
  )
}

export default LoadingPage
