import React from 'react'

interface Props {
  children: React.ReactNode
}

export function Footer({ children }: Props) {
  return (
    <>
      {/* Triangle decoration */}
      <div className="relative mb-[30px] z-[2]">
        {/* TriangleInverse - top-left corner triangle */}
        <div
          className="absolute top-0 left-0 inline-block w-0 h-0 -mb-1 bg-white"
          style={{
            borderStyle: 'solid',
            borderWidth: '4vh 0 0 100vw',
            borderColor: 'transparent transparent transparent #5652CC',
          }}
        />
        {/* Triangle - bottom-left corner */}
        <div
          className="absolute top-0 left-0 inline-block w-0 h-0 -mb-1"
          style={{
            borderStyle: 'solid',
            borderWidth: '0 0 4vh 100vw',
            borderColor: 'transparent transparent #33317a transparent',
          }}
        />
      </div>

      <footer className="w-screen relative bg-white">
        {/* ContainerFooter - dark bg for children */}
        <div className="py-[10px] block z-[2] mx-auto text-center text-white bg-[#33317a]">
          {children}
        </div>
        {/* Bottom copyright bar */}
        <div className="py-[10px] block z-[2] mx-auto text-center text-white bg-[#5652CC]">
          Otávio Sanchez <span className="text-[#FC780B] text-xs"> &copy;{new Date().getFullYear()} </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
