'use client'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

interface Props {
  title: string
  body: string[]
}

export function About({ title, body }: Props) {
  const layerPurpleRect = useParallax<HTMLDivElement>({ speed: 5 })
  const layerOrangeDot  = useParallax<HTMLDivElement>({ speed: -4 })
  const layerDots       = useParallax<HTMLDivElement>({ speed: 8 })
  const layerPhoto      = useParallax<HTMLDivElement>({ speed: -3, rotate: [-3, 3], scale: [0.97, 1.03] })

  return (
    <section id="sobre" className="w-screen flex items-center min-h-[80vh] relative py-16 box-border overflow-hidden">
      <div className="w-[90%] mx-auto max-w-[1280px] flex gap-12 max-md:flex-col">

        {/* Figure */}
        <figure className="w-1/2 flex justify-center items-center relative max-md:w-full max-md:mb-8 flex-shrink-0" style={{ minHeight: 420 }}>

          {/* Purple filled rectangle — offset behind photo, moves down */}
          <div
            ref={layerPurpleRect.ref}
            className="absolute z-[0] rotate-45"
            style={{
              width: 280,
              height: 280,
              backgroundColor: '#5652CC',
              opacity: 0.15,
              top: '15%',
              left: '15%',
            }}
          />

          {/* Orange outline square — bottom-right, moves up */}
          <div
            ref={layerOrangeDot.ref}
            className="absolute z-[1] rotate-45"
            style={{
              width: 100,
              height: 100,
              border: '3px solid #FC780B',
              bottom: '18%',
              right: '18%',
            }}
          />

          {/* Dot grid — top-right, moves down faster */}
          <div
            ref={layerDots.ref}
            className="absolute z-[1]"
            style={{ top: '12%', right: '20%' }}
          >
            <div className="grid gap-[8px]" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-[6px] h-[6px]" style={{ backgroundColor: '#A3A9D0' }} />
              ))}
            </div>
          </div>

          {/* Photo */}
          <div ref={layerPhoto.ref} className="relative z-[2] max-w-[340px] w-full">
            <img
              src="/images/otavio-sanchez.png"
              alt="Foto do Otávio Sanchez"
              title="Otávio Sanchez"
              className="w-full"
              style={{ filter: 'drop-shadow(0 16px 40px rgba(86,82,204,0.3))' }}
            />
          </div>
        </figure>

        {/* Text */}
        <article className="w-1/2 flex flex-col justify-center max-md:w-full">
          <h1 className="m-0 mb-6 text-[#5652CC] font-semibold font-['PlexusSans-Bold',sans-serif] p-0">
            {title}
          </h1>
          {body.map((text) => (
            <p key={text} className="font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-[#333] leading-relaxed mt-0 mb-4">
              {text}
            </p>
          ))}
        </article>
      </div>

      {/* Triangle */}
      <div
        className="absolute bottom-0 left-0 w-0 h-0"
        style={{
          borderStyle: 'solid',
          borderWidth: '0 0 6vh 100vw',
          borderColor: 'transparent transparent #ffffff transparent',
        }}
      />
    </section>
  )
}

export default About
