'use client'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

interface Props {
  title: string
  body: string[]
}

export function About({ title, body }: Props) {
  const parallax = useParallax({ speed: 5 })
  const parallaxAlternative = useParallax({ speed: 3 })

  return (
    <section id="sobre" className="w-screen flex items-center min-h-[80vh] relative py-8 box-border">
      <div className="w-[90%] mx-auto max-w-[1280px] flex max-md:flex-col">
        {/* Figure with parallax backgrounds */}
        <figure className="w-1/2 mx-auto flex justify-center items-center relative max-md:w-full max-md:my-8">
          <img
            src="/images/otavio-sanchez.png"
            alt="Foto do Otávio Sanchez"
            title="Otávio Sanchez"
            className="w-full max-w-[360px] z-[2]"
          />

          {/* Background purple squares - parallax */}
          <div
            ref={parallax.ref as React.RefObject<HTMLDivElement>}
            className="w-[255px] mx-auto rotate-45 absolute z-[1] mb-12 ml-4"
            style={{ position: 'absolute' }}
          >
            <div
              className="w-full h-full absolute rotate-45 top-0 right-0"
              style={{ backgroundColor: '#5652CC', content: ' ' }}
            />
            {Array.from(Array(16).keys()).map((value) => (
              <div key={value} className="w-[23%] pb-[23%] m-[1%] float-left" />
            ))}
          </div>

          {/* Background orange squares - parallax */}
          <div
            ref={parallaxAlternative.ref as React.RefObject<HTMLDivElement>}
            className="w-[255px] mx-auto rotate-45 absolute z-[1] mb-8 ml-4"
            style={{ position: 'absolute' }}
          >
            <div
              className="w-full h-full absolute rotate-45 top-0 right-0"
              style={{ backgroundColor: '#FC780B', content: ' ' }}
            />
            {Array.from(Array(16).keys()).map((value) => (
              <div key={value} className="w-[23%] pb-[23%] m-[1%] float-left" />
            ))}
          </div>
        </figure>

        {/* Article text */}
        <article className="w-1/2 mx-auto pr-[5%] text-justify box-border max-md:w-full max-md:mb-8" style={{ width: '50%' }}>
          <h1 className="m-0 text-[#5652CC] font-semibold font-['PlexusSans-Bold',sans-serif] p-0">
            {title}
          </h1>
          {body.map((text) => (
            <p key={text} className="font-['PlexusSans-ExtraLight',sans-serif] font-semibold">{text}</p>
          ))}
        </article>
      </div>

      {/* Triangle at the bottom */}
      <div
        className="absolute bottom-0 left-0 inline-block w-0 h-0"
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
