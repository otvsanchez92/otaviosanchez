'use client'
import React from 'react'
import Button from '../button'

interface Props {
  title: string
  infos: React.ReactNode
}

export function Banner({ title, infos }: Props) {
  return (
    <section className="w-screen min-h-[calc(100vh-50px)] flex items-center mt-[50px] relative z-[1]">
      <div className="w-[90%] mx-auto max-w-[1280px] items-center flex max-md:justify-between max-md:flex-col max-md:flex-col-reverse">
        {/* Left content */}
        <div className="w-full">
          <span className="typing-text font-['PlexusSans-Bold',sans-serif] text-[30px] text-[#333333]">
            Desenvolvedor
          </span>
          <h1
            className="m-0 text-[#5652CC] leading-none text-[150px] font-semibold font-['PlexusSans-Bold',sans-serif] p-0 max-md:text-[2em]"
            style={{ fontSize: 'clamp(2rem, 12vw, 150px)' }}
          >
            {title}
          </h1>
          <article className="mb-[50px]">
            <div className="[&_p]:font-['PlexusSans-ExtraLight',sans-serif] [&_p]:font-semibold [&_p]:my-2">
              {infos}
            </div>
          </article>
          <Button
            onClick={() => (window.location.href = '#sobre')}
            type="alternative">
            Ver Mais
          </Button>
        </div>

        {/* Right content - image */}
        <div className="w-full">
          <img src="/images/banner.svg" alt="Banner" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Banner
